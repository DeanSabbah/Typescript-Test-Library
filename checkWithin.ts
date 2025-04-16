/**
 * This function checks if the result of a function is within a certain tolerance of the expected value. Only use this function if the expected value is a number.
 * @param {function} func - The function to test. Must be passed as a lambda function. 
 * @param {number} expected - The expected value of the function. 
 * @param {number} tolerance - The tolerance of the function.
 * @returns {void} - Adds a test to be evaluated. 
 */
export default function checkWithin(expected:number , tolerance:number, func:Function):void {
    tester_arr.push(()=>{
        let result = func();
        if (Math.abs(result - expected) <= tolerance) {
            return true;
        }
        else {
           return [1, result, expected, tolerance];
        }
    });
}