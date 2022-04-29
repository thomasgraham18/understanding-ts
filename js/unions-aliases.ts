


// Union, being flexible with inputs
function combine(input1: number | string, input2: number | string) {
    let result;

    // Runtime check for type
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
const combinedNames = combine('Thomas', 'Graham');


console.log(combinedAges);
console.log(combinedNames);

// Literal types
function combine2(input1: number | string, input2: number | string, resultType: 'as-number' | 'as-text') {
    let result;

    // Runtime check for type
    if (typeof input1 == 'number' && typeof input2 == 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultType === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }

}

const combinedAges2 = combine2('30', '26', 'as-number');
const combinedAges3 = combine2(30, 26, 'as-number');
const combinedNames2 = combine2('Thomas', 'Graham', 'as-text');

console.log(combinedAges2);
console.log(combinedAges3);
console.log(combinedNames2);

// Literal types + type alisaes

type Combinable = number | string;
type resultTypes = 'as-number' | 'as-text';

function combine3(input1: Combinable, input2: Combinable, resultType: resultTypes) {
    let result;

    // Runtime check for type
    if (typeof input1 == 'number' && typeof input2 == 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges4 = combine3('30', '26', 'as-number');
const combinedAges5 = combine3(30, 26, 'as-number');
const combinedNames3 = combine3('Thomas', 'Graham', 'as-text');

console.log(combinedAges4);
console.log(combinedAges5);
console.log(combinedNames3);



