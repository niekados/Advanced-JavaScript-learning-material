// ***************** Destructuring arrays

// This is not destructuring
let ages = [30, 26, 27];
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log(john, mary, joe)

// This is destruturing
let ages2 = [40, 36, 17];
let [mike, tom, ellis] = ages2;
console.log(mike, tom, ellis);

// ***************** Destructuring objects
let jobs = {
    luke : "designer",
    jill : "developer",
    alicia : "accountant"
};
let {luke, jill, alicia} = jobs;
console.log(luke, jill, alicia);

// ***************** Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages; //first two varibles of languages are assigned and the rest are ignored
console.log(johnNative, johnSecondary);

// You can skip specific values with using empty "," to skip value in array
let [maryNative, , , marySecondary, maryThird] = languages //each comma skips one value
console.log(maryNative, marySecondary, maryThird);


let languages2 = {
    firstLanguage : "english",
    secondLanguage : "french",
    thirdLanguage : "german",
    fourthLanguage : "japanese"
};

let {firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// ***************** Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"]
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others); 


let people = {
    brian :"pizza",
    anna : "pasta",
    sarah : "vegetarian",
    andrea : "steak"
};

let {brian, anna, ...andTheRest} = people;
console.log(brian, anna);
console.log(andTheRest);