//  Important Array Method

//  normal using the for loop
const number = [4,2,5,8];
function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
    // comsole.log(`${number}*2 = ${number*2}`);
}
for(let i=0; i<number.length; i++){
    myFunc(number[i],i);
}


//    "forEach"

//  now by using the forEach reduces the for loop step in the simplified way
console.log("now by using the forEach");
const num1 = [3,6,9,12];
function myFunc1(num, index){
    console.log(`index is ${index} number is ${num}`);
}
num1.forEach(myFunc1);

// Another way of using forEach
const num2 = [2,3,4,5,6,7];
num2.forEach(function(numb, index){
    console.log(`index is ${index} number is ${numb}`);
});

num2.forEach(function(numbe, index){
    console.log(numbe*2, index)
});

//  real use of forEach

// forEach does'nt give give new array when it return, 
// but map() return a new array.
const users =[
   {firstName: "abhishek", age: 22, Gender:"male"},
   {firstName: "ashutosh", age: 24, Gender:"male"},
   {firstName: "varsha", age: 25, Gender:"male"},
]
users.forEach(function(user){
    console.log(user.firstName);
});

//   using  for of
// for(let user of users){
//     console.log(user.firstName);
// }

// using Arrow function
users.forEach((user, index)=>{
    console.log(user.firstName, index);
});



//  map
// filter
// reduces


