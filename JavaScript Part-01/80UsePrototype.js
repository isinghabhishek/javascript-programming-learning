

//  "__proto__" ek references, jo chain hum create karenge
//  "prototype" is simple Object.

// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'Hum tere bin Ab reh nahi sakte Tere bina kya vajoodh mera';
//     }    
// }

function createUser(firstName, lastName, email, age, address){
    // understand this in file 79
    // phale ye "__proto__" me "userMethods" set tha, but
    // ab hume "__proto__" ke value set karne hai "createUser.prototype" ke equal kardenge.
    const user = Object.create(createUser.prototype); // this line setting "createUser" to "prototype" 
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
//  we are going to add above userMethods in the "prototype" object
//  function jab free ki space de hai tho hum kue naa use kare
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function(){
    return this.age >= 18;
};
createUser.prototype.sing = function(){
    return 'sa re ga ma....';     
};

// console.log(createUser.prototype);
// with createUser function we'r getting free space --> "prototype" object
const user1 = createUser('Abhishek', 'Singh', 'singh@gmail.com', '18', 'Mirzapur uttar pradesh');
const user2 = createUser('Abimaniyu', 'dev', 'singh@gmail.com', '16', 'prayagraj uttar pradesh');
const user3 = createUser('prithivi', 'chauhan', 'singh@gmail.com', '24', 'varanasi uttar pradesh');
const user4 = createUser('Raaj', 'Rajput', 'singh@gmail.com', '14', 'Delhi ');

console.log(user2)
// o/p-->  address: "prayagraj uttar pradesh"
//         age: "16"
//         email: "singh@gmail.com"
//         firstName: "Abimaniyu"
//         lastName: "dev"
//         [[Prototype]]: Object
//         about: ƒ ()
//         is18: ƒ ()
//         sing: ƒ ()
//         constructor: ƒ createUser(firstName, lastName, email, age, address)
//         [[Prototype]]: Object

console.log(user2.sing());
console.log(user4.about());
console.log(user3.is18());
