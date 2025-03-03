let tests = [];

/**
 * This function checks if the result of a function is equal to the expected value. Only use this function if the expected value is a number.
 * @param {function} func - The function to test. Must be passed as a lambda function.
 * @param {number} expected - The expected value of the function.
 * @returns {void} - Adds a test to be evaluated.
 */
function checkExpect(func, expected) {
    tests.push(()=>{
        let result = func();
        if (result == expected) {
            return true;
        }
        else {
            return [0, result, expected];
        }
    });
}

/**
 * This function checks if the result of a function is within a certain tolerance of the expected value. Only use this function if the expected value is a number.
 * @param {function} func - The function to test. Must be passed as a lambda function. 
 * @param {number} expected - The expected value of the function. 
 * @param {number} tolerance - The tolerance of the function.
 * @returns {void} - Adds a test to be evaluated. 
 */
function checkWithin(func, expected, tolerance) {
    tests.push(()=>{
        let result = func();
        if (Math.abs(result - expected) <= tolerance) {
            return true;
        }
        else {
           return [1, result, expected, tolerance];
        }
    });
}

/**
 * This function checks if the result of a function satisfies a predicate. Predicate must be a function with one parameter.
 * @param {function} func - The function to test. Must be passed as a lambda function.
 * @param {function} pred - The predicate to test. Must be passed as a lambda function.
 * @returns {void} - Adds a test to be evaluated.
 */
function checkSatisfy(func, pred){
    tests.push(()=>{
        let result = func();
        if(pred(result)){
            return true;
        }
        else{
            return [2, result, pred];
        }
    });
}

/**
 * This function checks if the functions throw an error. Also checks if the error message is correct (if provided).
 * @param {function} func - The function to test. Must be passed as a lambda function.
 * @param {string} message - The error message to check for. Optional.
 * @returns {void} - Adds a test to be evaluated.
 */
function checkError(func, message){
    tests.push(()=>{
        if(typeof message == "undefined"){
            try{
                func();
                return [3];
            }
            catch(e){
                return true;
            }
        }
        else{
            try{
                let result = func();
                return [5, result, message];
            }
            catch(e){
                if(e.message == message){
                    return true;
                }
                else{
                    return [4, e.message, message];
                }
            }
        }
    });
}

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
                        console.error('encountered the following error instead of the expected "' + failures[i][1] + '":');
                        console.log("      " + failures[i][2]);
                        break;
                    // checkError no error and with message
                    case 5:
                        console.error("Expected the following error, but instead received the value " + failures[i][1] + ".");
                        console.log("      " + failures[i][2]);
                        break;
                    // Unknown test type
                    default:
                        throw new Error("Invalid test type.");
                }
            }
            catch(e){
                console.error(e);
            }
        }
    }
}

export {checkExpect, checkWithin, checkSatisfy, checkError, test};
