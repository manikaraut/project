const CustomAdd = (a,b)=>{
    return a+b;
};

//Test cases
const testCases = [
    {input:[2,3],expectedOutput:5 },
    {input:[0,0],expectedOutput:0 },
    {input:[-1,4],expectedOutput:3 },

];

//run tests
testCases.forEach((testCase) =>{
    const result = CustomAdd(testCase.input[0],testCase.input[1]);

    if (result === testCase.expectedOutput){
        console.log(`Test passed: ${testCase.input} added correctly`);
    }else{
        console.error(
            `Test failed: Expected ${testCase.expectedOutput},get ${result}`
        );
    }
});