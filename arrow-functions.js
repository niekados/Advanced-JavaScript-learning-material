// To run JS in terminal, type node arrow-functions.js

// Vanilla JavaScript Functions


function addTwoNumbers1 (a, b) {
    // Code Block
    return a + b;
}

let sum1 = addTwoNumbers1(3,5);
console.log(sum1)


// Arrow Functions with With Parameters
// Usually arrow functions are defined as constants, to ensure that they dont get overwritten or missused.
// Also must be defined before being called.


const addTwoNumbers = (a,b) => {
    return a + b;
}

let sum = addTwoNumbers(3,5);
console.log(sum);


// Single Line Arrow Function with Parameters

const addTwoNumbers2 = (a,b) => a + b; // You can write like this too: const addTwoNumbers2 = (a,b) => (a + b);
let sum2 = addTwoNumbers2(6,4)
console.log(sum2)
// Implict Returns

// Single parameter arrow function
const saySomething = message => console.log(message);
saySomething('Saying Something!');

// No parameter arrow function
const sayHello = () => console.log('hello')
sayHello();

// Returning Multiple Lines

// Must have a perenteceys 
const returnMultipleLines = () => (
    `<p>
        This is multiline string!
    </p>`
)

console.log(returnMultipleLines());