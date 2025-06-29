//  different methods of strings in javaScript
// string

// trim()
let firstName = "    abhishek    ";
console.log(firstName.length);

// let newString = firstName.trim(); OR
firstName = firstName.trim();
console.log(firstName);
console.log(firstName.length);

//toUpperCase
firstName = firstName.toUpperCase();
console.log(firstName);

//toLowerCase
firstName = firstName.toLowerCase();

//slice
//start index
//end index
let newString = firstName.slice(1, 5);
console.log(newString);
