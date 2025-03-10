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

// Global method to silence test output
global.silenceTest = (val = null)=>{
    if(val != null){
        silence = val;
    }
    else{
        return silence;
    }
}

// Global method to execute tests
global.executeTest = (val = null)=>{
    if(val != null){
        execute = val;
    }
    else{
        return execute;
    }
}

// Exported methods
export { test, checkExpect, checkWithin, checkSatisfy, checkError, checkRange };