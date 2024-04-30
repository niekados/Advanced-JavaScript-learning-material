
/**
* To run this file in Gitpod, use the 
* command node reduce.js in the terminal
*/


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];
// "acc" - accumulator, "curr" - currentValue
// accumulator represents the total value that will be returned from reduce method.
// currentValue - represents current array item that the callback function is being run on.
// '0' is optional initial value, thats the value at which accumulator starts, if it's not specified, it will start at index 0
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10


// Expand this function to see how reduce works
let sum1 = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator:", acc,
        "Current Value:", curr,
        "Total:", acc + curr
    );
    return acc + curr;
})


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

const totalExperience = teamMembers.reduce(( acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience)

// Grouping by a property, and totaling it too
// expected result {Developer: 12, Designer: 4}

let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {});

console.log(experienceByProfession);