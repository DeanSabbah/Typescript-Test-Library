/**
 * This function checks if the result of a function is equal to the expected value. Only use this function if the expected value is a number.
 * @param {function} func - The function to test. Must be passed as a lambda function.
 * @param {any} expected - The expected value of the function.
 * @returns {void} - Adds a test to be evaluated.
 */

export default function checkExpect(expected: any, func: Function): void{
    tester_arr.push(()=>{
        let result: number = func();
        if (result === expected) {
            return true;
        }
        else {
            return [0, result, expected];
        }
    });
}