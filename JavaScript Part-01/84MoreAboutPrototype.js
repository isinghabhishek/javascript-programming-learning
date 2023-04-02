//  more about prototype

// let numbers = new Array(1,2,3);
// prototype
// prototype ---> function

// internal javaScript create Array as give below
// Array constructor ka use kartha hai
let nums = new Array(1, 2, 3); // these way we can also create a Array

// let numbers = [1,2,3];
 console.log(Array.prototype);

// console.log(Object.getPrototypeOf(numbers));
// in javaScript array bhi objects hote hai
// console.log(numbers);

function hello(){
    console.log("hello");
}
// in javaScript har functional ke saath free ke property("prototype") mile the hai
// prototype
console.log(hello.prototype);

