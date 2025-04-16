import checkExpect from "./checkExpect.ts";
import checkWithin from "./checkWithin.ts";
import checkSatisfy from "./checkSatisfy.ts";
import checkError from "./checkError.ts";
import checkRange from "./checkRange.ts";
import test from "./test.ts";

globalThis.tester_arr = [];
globalThis.silence = false;
globalThis.execute = true;

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

// Exported methods
export { test, checkExpect, checkWithin, checkSatisfy, checkError, checkRange };