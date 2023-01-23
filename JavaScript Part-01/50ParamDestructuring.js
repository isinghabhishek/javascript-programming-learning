//  param destructuring

// object ke saath
// react(me mostly) 

const person = {
    firstName: "abhishek",
    gender: "male",
    age: 22,
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }
// printDetails(person);

// best way of accessing parameters
// destructuring
function printDetails( {firstName, gender, age} ){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);
