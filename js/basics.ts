/**
 * ? Core types in TS
 * ? Number
 * ? String
 * ? Boolean
 */



function add(n1: number, n2: number, showResult: boolean, phrase: string){
    // TypeScript essentially does this for us when we tell it n1 and n2 are :number
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect Input')
    // }

    const result = n1 + n2; // We do this to keep result as a number when we add $phrase

    if (showResult) {
        console.log(phrase + result); // If showResult is true log the phrase:string + result:number
    } else {
        return n1 + n2;
    }
    return n1 + n2
}

const number1 = 69;
const number2 = 3;
const printResult = false;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase)



