/**
 * Function that checks if the result of a function is within a certain range
 * @param {Function} func 
 * @param {Number} minVal 
 * @param {Number} maxVal 
 * @returns {void} Adds the test to the tester_arr array
 */

export default function checkRange(minVal: number, maxVal: number, func: Function): void{
    tester_arr.push(()=>{
        let result:number = func();
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