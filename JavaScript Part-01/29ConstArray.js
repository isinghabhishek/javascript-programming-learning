// Use Const  For Creating Array

// jab bhi koi reference data type use karenge tab "const" use karenge
// heap memory ["apple", "mango"] 0x11(address)

const fruits = ["apples", "mango"];  // 0x11
// fruits = ["banana", "waterlaemon"];   
// we can't assign  'fruits' with new array in const this is not allowed
fruits.push("banana"); // we can arrays method
console.log(fruits);

// use of "const" are safe and preffred

// this is the diffrences in const & let
let fruits2 = ["apples", "mango", "kiwi"];  // 0x11
fruits2 = ["grapes", "pineapple"];    
// when we use let the assing new value in fruit are allowed
fruits2.push("banana");
console.log(fruits2);