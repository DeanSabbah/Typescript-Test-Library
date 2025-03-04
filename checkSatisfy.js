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

export {checkSatisfy}