// And Or Operator

let firstName = "Abhishek";
let age = 12;

// if(firstName[0] === "A"){
//     console.log("your name starts with A");
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// And Operator(&&)
// in And both stmt must be true to exicute if stmt
if (firstName[0] === "A" && age > 18) {
  console.log("Name starts with A and above 18");
} else {
  console.log("inside else");
}

// OR Operator(||)
// if any one of stmt is true then if stmt will exicute
let firstName1 = "Abhishek";
let age1 = 12;
if (firstName1[0] === "A" || age1 > 18) {
  console.log("inside if");
} else {
  console.log("inside else");
}
