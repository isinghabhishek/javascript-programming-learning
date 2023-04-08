// what happens to function Declarations?
console.log(this);
console.log(window);
console.log(myFunction);
myFunction();
console.log(fullName);

// function declaration
function myFunction() {
    console.log("this is my function");
}

var firstName = "Abhishek";
var lastName = "Singh";
var fullName = firstName + " " + lastName;
console.log(fullName);