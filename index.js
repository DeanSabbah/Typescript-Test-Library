import {checkExpect} from "./checkExpect.js";
import {checkWithin} from "./checkWithin.js";
import {checkSatisfy} from "./checkSatisfy.js";
import {checkError} from "./checkError.js";
import {checkRange} from "./checkRange.js";
import {test} from "./test.js";

// Global array to store tests generated in other files
global.tester_arr = [];
var silence = false;
var execute = true;

// Global method to set test output silence
global.silenceTest = (val = null)=>{
    try{
        if(typeof(val) !== "boolean" && val != null){
            throw new TypeError("Value must be a boolean");
        }
    }
    catch(e){
        console.error(e);
        return;
    }
    if(val != null){
        silence = val;
    }
    else{
        return silence;
    }
}

// Global method to set test execution
global.executeTest = (val = null)=>{
    try{
        if(typeof(val) !== "boolean" && val != null){
            throw new TypeError("Value must be a boolean");
        }
    }
    catch(e){
        console.error(e);
        return;
    }
    if(val != null){
        execute = val;
    }
    else{
        return execute;
    }
}

// Exported methods
export { test, checkExpect, checkWithin, checkSatisfy, checkError, checkRange };