import checkExpect from "./checkExpect.ts";
import checkWithin from "./checkWithin.ts";
import checkSatisfy from "./checkSatisfy.ts";
import checkError from "./checkError.ts";
import checkRange from "./checkRange.ts";
import test from "./test.ts";

globalThis.tester_arr = [];

// Initialize parameters to default values
let silence:boolean = false;
let execute:boolean = true;
let preserve:boolean = true;

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