// Nested If Else

// for takeing input from user we can use "prompt".

let winingNumber = 19;
// prompt take input in string, converting string -> Number
// we use "+prompt" -> is Number now
let userGuess = +prompt("Guess a Number"); // taking Number input from user
// console.log(typeof userGuess, userGuess);

if (userGuess === winingNumber) {
  console.log("Your Guess Is Right!!");
} else {
  if (userGuess < winingNumber) {
    console.log("too low !!!");
  } else {
    console.log("too high !!!");
  }
}
