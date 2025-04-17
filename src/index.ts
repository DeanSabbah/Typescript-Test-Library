import checkExpect from "./checkExpect.js";
import checkWithin from "./checkWithin.js";
import checkSatisfy from "./checkSatisfy.js";
import checkError from "./checkError.js";
import checkRange from "./checkRange.js";
import test from "./test.js";

globalThis.tester_arr = [];

// Initialize parameters to default values
let silence:boolean = false;
let execute:boolean = true;
let preserve:boolean = false;

globalThis.silenceTest = (val:boolean | null = null):boolean|void => {
    if(val != null){
        silence = val;
    }
    else{
        return silence;
    }
}

globalThis.executeTest = (val:boolean | null = null):boolean|void => {
    if(val != null){
        execute = val;
    }
    else{
        return execute;
    }
}

globalThis.preserveTest = (val:boolean | null = null):boolean|void => {
    if(val != null){
        preserve = val;
    }
    else{
        return preserve;
    }
}

globalThis.clearTests = () => {
    tester_arr = [];
}

// Exported methods
export { test, checkExpect, checkWithin, checkSatisfy, checkError, checkRange };