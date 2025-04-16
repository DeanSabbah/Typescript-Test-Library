export {};

declare global {
    var tester_arr: Array<Function>;
    var silence: boolean;
    var execute: boolean;
    function silenceTest(val?: boolean | null): boolean | void;
    function executeTest(val?: boolean | null): boolean | void;
    function clearTests():void;
}
