//   Hoisting

// Hoisting is the default behaviour of javascript where all the 
// variable and function declarations are moved on top.

// This means that irrespective of where the variables and functions 
// are declared, they are moved on top of the scope. 
// The scope can be both  local and global.

hello();    // calling before of it's decleration
function hello(){
    console.log("Namaste World");
}

//  these happens in the case of "Function Deceration" only.
//  "Hoisting" not happens in the case of "Function Expresstion" & "Arrow function".
//  we can not call function before of it's decleration.


// using var then will we  get 'undefind'
console.log(hello);
var hello = "Hello World";
// console.log(hello);


// but in the case of 'let' & 'const' it w give error
// console.log(hello);
// let hello = "Hello World";
// console.log(hello);

// console.log(hello);
// const hello = "Hello World";
// console.log(hello);
