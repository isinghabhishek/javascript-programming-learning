//  Difference Between Dot And Bracket Notation

const key = "email";
const person = {
    name: "abhishek",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}
// bracket notation give us advantage using these
// we can acesses the argument that have space
console.log(person["person hobbies"]);
// console.log(person.person hobbies); wrong way of acsseing
// adding email property in object
person[key] = "abhisheksingh@gmail.com";
console.log(person);