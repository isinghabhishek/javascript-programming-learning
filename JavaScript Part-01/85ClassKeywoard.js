//  class  keywoard


//  class are fake--> internal working are same as that 
// we have seen in the early slides

//  using class Keywoard
class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address; 
    }
    // class ke ander jo functions hote hai unko Method khte hai
    // class me methods create karna ur bhi aashan hai
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return 'sa re ga ma....';
    }
}
// class constructor "CreateUser" cannot be invoked(call karna) without "new" keyword
// without "new" keyword hum object nahi create kar sakte
const user1 = new CreateUser('Abhishek', 'Singh', 'singh@gmail.com', '18', 'Mirzapur uttar pradesh');
const user2 = new CreateUser('Abimaniyu', 'dev', 'singh@gmail.com', '16', 'prayagraj uttar pradesh');
const user3 = new CreateUser('prithivi', 'chauhan', 'singh@gmail.com', '24', 'varanasi uttar pradesh');
const user4 = new CreateUser('Raaj', 'Rajput', 'singh@gmail.com', '14', 'Delhi ');
console.log(user1);
// o/p--> address: "Mirzapur uttar pradesh"
//        age: "18"
//        email: "singh@gmail.com"
//        firstName: "Abhishek"
//        lastName: "Singh"
//        [[Prototype]]: Object
//        about: ƒ ()
//        is18: ƒ ()
//        sing: ƒ ()
//        constructor: ƒ CreateUser(firstName, lastName, email, age, address)
//        [[Prototype]]: Object

console.log(Object.getPrototypeOf(user1));





//  using prototype and new keywoard

// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// };
// CreateUser.prototype.sing = function(){
//     return 'Hum tere bin Ab reh nahi sakte Tere bina kya vajoodh mera';     
// };

// const user1 = new CreateUser('Abhishek', 'Singh', 'singh@gmail.com', '18', 'Mirzapur uttar pradesh');
// const user2 = new CreateUser('Abimaniyu', 'dev', 'singh@gmail.com', '16', 'prayagraj uttar pradesh');
// const user3 = new CreateUser('prithivi', 'chauhan', 'singh@gmail.com', '24', 'varanasi uttar pradesh');
// const user4 = new CreateUser('Raaj', 'Rajput', 'singh@gmail.com', '14', 'Delhi ');



