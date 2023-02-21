// practising the other datatypes of javaScripts

// undefiend
// if variable declared in javaScript, but not intialise then it will be Undefined
let firstName;
console.log(typeof firstName);

firstName = "Abhishek";
console.log(typeof firstName, firstName);

//null
let myVariable = null;
console.log(myVariable);
myVariable = "Abhishek";
console.log(myVariable, typeof myVariable);
// typeof null -> object
console.log(typeof null);  // bug, error


//BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
Console.log(myNumber + sameMyNumber);
