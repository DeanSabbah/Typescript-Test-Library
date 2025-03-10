/**
 * This function checks if the result of a function is within a certain tolerance of the expected value. Only use this function if the expected value is a number.
 * @param {function} func - The function to test. Must be passed as a lambda function. 
 * @param {number} expected - The expected value of the function. 
 * @param {number} tolerance - The tolerance of the function.
 * @returns {void} - Adds a test to be evaluated. 
 */
function checkWithin(func, expected, tolerance) {
    tester_arr.push(()=>{
        let result;
        try {
            if(typeof(func) !== "function"){
                throw new TypeError("Func is not a function");
            }
            if(typeof(expected) !== "number"){
                throw new TypeError("Expected is not a number");
            }
            if(typeof(tolerance) !== "number"){
                throw new TypeError("Tolerance is not a number");
            }
            result = func();
        }
        catch (e) {
            return [null, e];
        }
        if (Math.abs(result - expected) <= tolerance) {
            return true;
        }
        else {
           return [1, result, expected, tolerance];
        }
    });
}

export {checkWithin}