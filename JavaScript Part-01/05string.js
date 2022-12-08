// string indexing

let firstName = "abhishek";

// console.log(firstName[0]);

// length of string 
console.log(firstName.length);

// we can asccess the string character by index

//  a  b  h  i  s  h  e  k
//  0  1  2  3  4  5  6  7
// last index
console.log(firstName1[firstName1.length-1]);


//  diffrent methods in strings

// trim()
let firstName1 = "    abhishek    ";
console.log(firstName1.length);

// let newString = firstName.trim(); OR 
firstName = firstName1.trim();
console.log(firstName1);
console.log(firstName1.length);

//toUpperCase
 firstName = firstName1.toUpperCase();
 console.log(firstName1);

 //toLowerCase

 //slice
 //start index
 //end index
 let newString = firstName1.slice(1,5);
 console.log(newString);