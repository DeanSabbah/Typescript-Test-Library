import {checkExpect} from "./checkExpect.js";
import {checkWithin} from "./checkWithin.js";
import {checkSatisfy} from "./checkSatisfy.js";
import {checkError} from "./checkError.js";

global.tests = [];

/**
 * Evaluates all tests and logs the results to the console.
 */
function test(){
    let failures = [];
    let successes = 0;
    tests.forEach((test)=>{
        let result = test();
        if(result !== true){
            failures.push(result);
        }
        else{
            successes++;
        }
    });
    if(tests.length == successes){
        switch(successes){
            case 1:
                console.log("The test passed!");
                break;
            case 2:
                console.log("Both tests passed!");
                break;
            default:
                console.log("All " + tests.length + " tests passed!");
                break;
        }
    }
    else{
        if(successes > 0){
            console.log(failures.length + " of the " + tests.length + " tests failed.");
        }
        else{
            console.log("All tests failed.");
        }
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
                        console.error("Actual vallue " + failures[i][1] + " is not within " + failures[i][3] + " of expected value " + failures[i][2] + ".");
                        break;
                    // checkSatisfy
                    case 2:
                        console.error("Actaul value " + failures[i][1] + " does not satisfy " + failures[i][2] + ".");
                        break;
                    // checkError
                    case 3:
                        console.error("Expected an error, but instead received the value " + failures[i][1] + ".");
                        break;
                    // checkError with message
                    case 4:
                        console.error('Encountered the following error instead of the expected "' + failures[i][1] + '":');
                        console.log('      "' + failures[i][2]+'"');
                        break;
                    // checkError no error and with message
                    case 5:
                        console.error("Expected the following error, but instead received the value " + failures[i][1] + ".");
                        console.log('      "' + failures[i][2]+'"');
                        break;
                    // Unknown test type
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

export {checkExpect, checkWithin, checkSatisfy, checkError, test};
