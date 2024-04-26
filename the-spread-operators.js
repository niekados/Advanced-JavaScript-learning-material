// To run this in terminal : node the-spread-operators.js

// ********* No psread operator ********* 

let array1 = [1,2,3];
let array2 = array1;

// push another element to array2
// In this scenario "4" is also pushed into array1. This is because the array2 is not acctual copy of array1, but just a reference to array1
array2.push(4);


console.log("array1: ", array1)
console.log("array2: ", array2)


// *********  Copying an array [ES6] ********* 

// '...' is spread operator, it spreads the values and creates an entirely new object
let array3 = [4,5,6]
let array4 = [...array3]

array4.push(7);
console.log("array3: ", array3); // array3 remains untouched
console.log("array4: ", array4); // only array4 has '7' pushed in it 


// *********  Copying an object ********* 

let object1 = {a:1, b:2, c:3 };
let object2 = { ...object1, d: 4 }; // Spread object1 in to object2 and also, you can add a new property (in this case "d")
let object3 = { ...object1, b: 5 }; // If you want to modify key value from original object, you can just reassign it


console.log("object1:" ,object1)
console.log("object2:" ,object2)
console.log("object3:" ,object3)

// *********  copying only part of an array/object ********* 

// The spread operator doesn't need to make entire object or array you create with it 
let array5 = [...array1, {...object1}, ...array3, "x", "y", "z"]
console.log("array5:", array5)
// RETURNS array5: [ 1, 2, 3, 4, { a: 1, b: 2, c: 3 }, 4, 5, 6, 'x', 'y', 'z' ]