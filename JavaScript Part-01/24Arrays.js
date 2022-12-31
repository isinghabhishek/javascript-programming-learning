//  Arrays
//  Array is A References Type
// ordered collections of Items

let fruits = ["apple", "mango", "grapes"];

// let numbers = [1,2,3,4];
// let mixed = [1,2,3, "string", null, undefined];
// console.log(fruits);
//  console.log(numbers);
// console.log(mixed);


console.log(fruits);
fruits[1] = "banana";
console.log(fruits);
console.log(Array.isArray(fruits));

let obj = {};  //oject literal
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(obj));