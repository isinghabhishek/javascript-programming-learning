//  new keywoard

//  new Keywoard
// 1.) empthy Object ko create kar raha hai -->  this = {}
// 2.) return this
// 3.) new keywoard do work of it--> Object.create(createUser, prototype);
//  which we need to do manually ie. explained in the previous slides

//  constructor function
// jab hume pata hai ki jo function hum bana rahe hai wo 
// new keyword se hi call hooga tho ushkoo hum 
// Capital letter me likh the hai to know that it will 
// be called using "new" keyword
function CreateUser(firstName, lastName, email, age, address){ //  constructor function
    // const user = Object.create(createUser.prototype); // this line set "createUser" in "prototype" // understand in file 79
    //  we dont'n need to do this 
    // "new" keywoard will automitacally do
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};
CreateUser.prototype.sing = function(){
    return 'sa re ga ma....';     
};
const user1 = new CreateUser('Abhishek', 'Singh', 'singh@gmail.com', '18', 'varanasi uttar pradesh');
const user2 = new CreateUser('Abimaniyu', 'dev', 'singh@gmail.com', '16', 'prayagraj uttar pradesh');
const user3 = new CreateUser('prithivi', 'chauhan', 'singh@gmail.com', '24', 'varanasi uttar pradesh');
const user4 = new CreateUser('Raaj', 'Rajput', 'singh@gmail.com', '14', 'Delhi ');

console.log(user1);
// o/p--> address: "prayagraj uttar pradesh"
//        age: "16"
//        email: "singh@gmail.com"
//        firstName: "Abimaniyu"
//        lastName: "dev"
//        [[Prototype]]: Object
//        about: ƒ ()
//        is18: ƒ ()
//        sing: ƒ ()
//        constructor: ƒ CreateUser(firstName, lastName, email, age, address)
//        [[Prototype]]: Object

console.log(user2.sing());
console.log(user4.about());
console.log(user3.is18());
