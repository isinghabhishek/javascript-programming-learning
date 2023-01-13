//  Objects

// Object is A References Type
// arrays are good but not sufficient
// for real world data

// objects store key values pairs
// objects don't have index

//  Creating An Object

// object #1
// const person = {name:"Abhishek",age:22};

//  object #2
// const person = {
//     name: "Abhishek",
//     age: 22,
//     hobbies: ["guitar", "sleeping", "Listening Music"]
// }

// #3 like these we can also use 
const person = {
    "name": "Abhishek",
    "age": 22,
    "hobbies": ["guitar", "sleeping", "Listening Music"]
}
console.log(person);
// object name property

// Accessing data from objects  
// Accessing objects proprties
//    Dot Notation
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// Bracket Notation || without Dot notation
console.log(person["name"]);
console.log(person ["age"]);
console.log(person["hobbies"]);

// Adding key value pair to objects

//  Dot ntation
// person.gender = "male";

//   Bracket Notation
person["gender"] = "male";
console.log(person);