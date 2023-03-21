
// we improveing our code so that it takes less memory
// suppose we want to add thousands of the method
// and what if we forget to add it's reference in javascript
// so, first we will understand in file "78.js"

const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'sa re ga ma....';
    }    
}
function createUser(firstName, lastName, email, age, address){
    // using Object.create() function, these helps
    // in setting up the "userMethods" in "__proto__". 
    // "__proto__" references hai "userMethods" kaa
    const user = Object.create(userMethods); // this line set "userMethod" in "__proto__" // understand in file 78
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}

const user1 = createUser('Abhishek', 'Singh', 'singh@gmail.com', '18', 'Mirzapur uttar pradesh');
const user2 = createUser('Abimaniyu', 'dev', 'singh@gmail.com', '16', 'prayagraj uttar pradesh');
const user3 = createUser('prithivi', 'chauhan', 'singh@gmail.com', '24', 'varanasi uttar pradesh');
const user4 = createUser('Raaj', 'Rajput', 'singh@gmail.com', '14', 'Delhi ');

console.log(user2)
console.log(user2.about());
// user methods  are set in [[prototype]] or __proto__
//  "__proto__" me "userMethods" set hojaye gaa
//   "__proto__" is reference of "userMethod" Object.

//   if we create thousand of the userMethods objects 
//  and that are not persent in the "userCreate" object than
//  JavaScript will automatically will access that object 
//  from '__proto__' which  contents all that objects that are not in 

console.log(user4.about());
console.log(user3.sing());
