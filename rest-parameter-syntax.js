/**
 * To run this file, use the
 * command node rest-parameter-syntax.js
 */

// ******************** Regular function call

const sumAll = (a, b, c ) => a + b + c;
let sum = sumAll(1,2,3);
console.log("Sum:", sum);

// ******************** Extra arguments are ignored

// in this case "4,5,6" will be ignored, as sumAll takes only 3 parameters
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("sum2:", sum2)

// ******************** Function using ...rest

// technically parameters "rest" can be called anything, but for explanation it will be called "rest" here 
const sumRest =  (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3)