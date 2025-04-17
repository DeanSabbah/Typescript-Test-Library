/**
 * This function checks if the result of a function satisfies a predicate. Predicate must be a function with one parameter.
 * @param {function} func - The function to test. Must be passed as a lambda function.
 * @param {function} pred - The predicate to test. Must be passed as a lambda function.
 * @returns {void} - Adds a test to be evaluated.
 */
export default function checkSatisfy(pred:Function, func:Function):void {
    tester_arr.push(()=>{
        let result:any = func();
        if(pred(result)){
            return true;
        }
        else{
            return [2, result, pred];
        }
    });
}