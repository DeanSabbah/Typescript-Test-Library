export {};

declare global {
    var tester_arr: Array<Function>;

    function silenceTest(val?: boolean | null): boolean | void;
    function executeTest(val?: boolean | null): boolean | void;
    function preserveTest(val?: boolean | null):boolean | void;
    function clearTests():void;
}
