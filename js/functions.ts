// Return types, TS does it for you, and probably better
function add(n1: number, n2: number) {
    return n1 + n2;
}

// New type, VOIDS!!!!!
function printResult(num: number) {
    console.log('Result: ' + num);

}

//Callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12))

//let combinedValues : Function; // This has to be a function

let combinedValues: (a: number, b: number) => number; // combinedValues should accept any function where the paramters are numbers, and overall returns a number

combinedValues = add;
//combinedValues = printResult; // This would break if we just use :Function, beause it doesnt know anything about the function, because while it is a function, its the wrong one
// combinedValues = 5; Shows us we are wrong

console.log(combinedValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);

})
