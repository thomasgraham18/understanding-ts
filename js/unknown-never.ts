// Unknown

let userInput: unknown; // Allows an unknown value
let userName: string;

userInput = 5;
userInput = 'Max';

//userName = userInput; // Need a type check, Typescript knows we were unsure upon creatinon

if (typeof userInput == 'string') {
    userName = userInput;
}

// This function never returns anything, and we can be really clear about it
function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code}
    //while (true) {

    //}
}

generateError('An error occured!', 500);
