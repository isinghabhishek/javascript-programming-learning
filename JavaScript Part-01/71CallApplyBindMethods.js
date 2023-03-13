//  call  apply  bind

function hello() {
    console.log("hello world");
}
// normally calling a function
hello(); // o/p --> hello world
// both will same output
// using .call() function --> we can call a function
hello.call(); // o/p --> hello world

// ex
const user = {
    firstName : "Abhishek",
    age : 21,
    about: function(){
        console.log(this.firstName, this.age)
    }
}
user.about(); // o/p --> Abhishek 21


// explaining call() function
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName: "abhishek",
    age: 18,
}
const user2 = {
    firstName: "Prthivi",
    age: 16,
}
// hume user2 keliye about() use karna hai
// these can be possible with the help of call() function
about.call(user2); // o/p--> Prthivi 16 undefined undefined
// user2 ko borrow karna hai user1 se about().
about.call(user1, "guitar", "moazrt"); 
// o/p --> abhishek 18 guitar moazrt
// in call we have pass it as a String


//   apply
// in appiy we pass in arguments in form of array
about.apply(user1, ["Drum", "bach"]); 
// o/p --> abhishek 18 Drum bach

// bind
// bind() return function which can be stored and called
const func = about.bind(user2, "instuments", "jagjitJi"); 
// o/p --> Prthivi 16 instuments jagjitJi
func();

