//   find method
//  it also take callback function as a input
// find method will find the first word which satisfied the codition

const myArray = ["Hello", "cat", "dog", "lion"];
// function isLength3(string){
//     return string.length===3;
// };
const ans = myArray.find((string)=>string.length===3);
console.log(ans); // here, "cat" will return not "dog" becoz "cat" appers first.

//  real example
const users = [
    {userId: 1, userName: "abhishek"},
    {userId: 2, userName: "shelly"},
    {userId: 3, userName: "priya "},
    {userId: 4, userName: "abhi"},
    {userId: 5, userName: "prithivi"},
];
const myUser = users.find((user)=>user.userId===3);
console.log(myUser);