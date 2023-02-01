//   call back function

// here value of a can be 'array','string'& {object} any thing.

// function myFunc2(){
//     console.log("inside my func2");
// }
// function myFunc(a){
//     console.log(a);
//     console.log('hello world');
// }
// myFunc();


// calling function back
// call back function means calling a function as a 
// input in other function
function myFunc2(name){
    console.log("inside my func2");
    console.log(`your name is ${name}`);
}
function myFunc(callback){
    console.log('hello there i am a func and i can..');
    callback("abhishek");
}
myFunc(myFunc2);