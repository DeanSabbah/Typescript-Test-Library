/**
 * This function checks if the result of a function is equal to the expected value. Only use this function if the expected value is a number.
 * @param {function} func - The function to test. Must be passed as a lambda function.
 * @param {number} expected - The expected value of the function.
 * @returns {void} - Adds a test to be evaluated.
 */

function checkExpect(func, expected) {
    tests.push(()=>{
        let result;
        try {
            if(typeof(func) !== "function"){
                throw new TypeError("Func is not a function");
            }
            if(typeof(expected) !== "number"){
                throw new TypeError("Expected is not a number");
            }
            result = func();
        }
        catch (e) {
            return [null, e];
        }
        if (result == expected) {
            return true;
        }
        else {
            return [0, result, expected];
        }
    });
}

export {checkExpect};