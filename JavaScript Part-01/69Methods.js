//  methods
//  function  inside  Objects

// 1
const person = {
    firstName: "abhishek",
    age: 18,
    about: function(){
        console.log(`person name Is ${this.firstName} and age is ${this.age}`);
    }
}
person.about();


// 2
//  Another Examples
 function personInfo(){
    console.log(`person name Is ${this.firstName1} and age is ${this.age1}`);
}

const person1 = {
    firstName1: "prthivi",
    age1: 20,
    about: personInfo
}
const person2 = {
    firstName1: "Raj",
    age1: 10,
    about: personInfo
}
const person3 = {
    firstName1: "taraa",
    age1: 26,
    about: personInfo
}
person1.about();
person2.about();
person3.about();