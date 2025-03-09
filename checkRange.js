/**
 * Function that checks if the result of a function is within a certain range
 * @param {Function} func 
 * @param {Number} minVal 
 * @param {Number} maxVal 
 * @returns {void} Adds the test to the tests array
 */
function checkRange(func, minVal, maxVal){
    tests.push(()=>{
        let result;
        try{
            if(typeof(func) !== "function"){
                throw new TypeError("Func is not a function");
            }
            if(typeof(minVal) !== "number"){
                throw new TypeError("minVal is not a number");
            }
            if(typeof(maxVal) !== "number"){
                throw new TypeError("maxVal is not a number");
            }
            result = func();
        }
        catch(e){
            return [null, e];
        }
        if(result >= minVal && result <= maxVal){
            return true;
        }
        else if(result > maxVal){
            return [6, result, maxVal];
        }
        else{
            return [7, result, minVal];
        }
    });
}

export { checkRange };