// writing javaScript code defining variables and, 
// acssesing the variables

// Normal way
let age = 22;
let firstName = "Abhishek";
// "my name is Abhishek and my age Is 22"
let aboutMe = "my name is " + firstName + " and my age is " + age;
console.log(aboutMe);

// Template String mthod with placeholder
// {} -> placeholder
let aboutMe1 = `my name is ${firstName} and my age is ${age}.`;
console.log(aboutMe1);
