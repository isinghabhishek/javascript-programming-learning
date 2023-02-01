//   map method
// these also take call back function as input 
// similar to that of the forEach

const numbers = [3,4,6,1,8];
// const square = function(number){
//     return number*number;
//     // console.log(number*number);  // use return in the map funtion.
// }
// map method --> we must always be returned
// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// map function make new array always.
// and we can store it new array


// using Arrow Function
const squareNumber1 = numbers.map((number,index)=>{
    return number*number;
});
console.log(squareNumber1);

// real use of map()
const users =[
    {firstName: "abhishek", age: 22, Gender:"male"},
    {firstName: "ashutosh", age: 24, Gender:"male"},
    {firstName: "varsha", age: 25, Gender:"male"},
 ]
 const userNames = users.map((user)=>{
     return user.firstName;
 });
 console.log(userNames);
 // map function returns an array from function which is being called
