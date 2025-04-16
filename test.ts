/**
 * Evaluates all tests and logs the results to the console.
 * @returns {void}
 */
export default function test():void{
    if(!executeTest()){
        console.log("Tests are currently disabled.");
        return;
    }
    else if(tester_arr.length == 0){
        console.log("No tests loaded.");
        return;
    }
    let failures:Array<any> = [];
    let successes:number = 0;
    tester_arr.forEach((test)=>{
        try{
            let result:any = test();
            if(result !== true){
                failures.push(result);
            }
            else{
                successes++;
            }
        }
        catch(e){
            console.error("Unexpected error during test evaluation.\n    " + e);
            failures.push([null, e]);
        }
    });
    if(tester_arr.length == successes){
        switch(successes){
            case 1:
                console.log("The test passed!");
                break;
            case 2:
                console.log("Both tests passed!");
                break;
            default:
                console.log("All " + tester_arr.length + " tests passed!");
                break;
        }
    }
    else{
        if(successes > 0){
            console.log(failures.length + " of the " + tester_arr.length + " tests failed.");
        }
        else{
            console.log("All tests failed.");
        }
        if(!silenceTest()){                
            console.log("\nFailures:");
            for(let i = 0; i < failures.length; i++){
                try{
                // Can easily add more test types here
                    switch(failures[i][0]){
                        // checkExpect
                        case 0:
                            console.error("Actual value " + failures[i][1] + " differs from " + failures[i][2] + ", the expected value.");
                            break;
                        // checkWithin
                        case 1:
                            console.error("Actual value " + failures[i][1] + " is not within " + failures[i][3] + " of expected value " + failures[i][2] + ".");
                            break;
                        // checkSatisfy
                        case 2:
                            console.error("Actaul value " + failures[i][1] + " does not satisfy " + failures[i][2] + ".");
                            break;
                        // checkError no error and no message
                        case 3:
                            console.error("Expected an error, but instead received the value " + failures[i][1] + ".");
                            break;
                        // checkError wrong message
                        case 4:
                            console.error('Encountered the following error instead of the expected "' + failures[i][1] + '":');
                            console.log('      "' + failures[i][2]+'"');
                            break;
                        // checkError no error with message
                        case 5:
                            console.error("Expected the following error, but instead received the value " + failures[i][1] + ".");
                            console.log('      "' + failures[i][2]+'"');
                            break;
                        // checkRange maxVal
                        case 6:
                            console.error("Actual value " + failures[i][1] + " exceeds the maximum value of " + failures[i][2] + ".");
                            break;
                        // checkRange minVal
                        case 7:
                            console.error("Actual value " + failures[i][1] + " is less than the minimum value of " + failures[i][2] + ".");
                            break;
                        // Unknown test type/Unexpected error
                        default:
                            if(failures[i][1]){
                                throw new Error("Error during test evaluation.\n    " + failures[i][1]);
                            }
                            throw new Error("Error during test evaluation.");
                    }
                }
                catch(e){
                    console.error(e);
                }
            }
        }
    }
}