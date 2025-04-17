/**
 * This function checks if the functions throw an error. Also checks if the error message is correct (if provided).
 * @param {function} func - The function to test. Must be passed as a lambda function.
 * @param {string} message - The error message to check for. Optional.
 * @returns {void} - Adds a test to be evaluated.
 */
export default function checkError(func:Function, message:string|undefined = undefined):void{
    tester_arr.push(()=>{
        if(message == undefined){
            try{
                let result = func();
                return [3, result];
            }
            catch(e:any){
                if(e.message == "func is not a function"){
                    return [null, e];
                }
                return true;
            }
        }
        else{
            try{
                let result = func();
                return [5, result, message];
            }
            catch(e:any){
                if(e.message == message){
                    return true;
                }
                else{
                    if(e.message == "func is not a function"){
                        return [null, e];
                    }
                    return [4, e.message, message];
                }
            }
        }
    });
}