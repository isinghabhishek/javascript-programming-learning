//  creating functions to create  multiple objects

//  proto ,  prototype ,   class --> will learn later

//  normal way
// const user = {
//     firstName: "Abhishek",
//     lastName: "Singh",
//     email: "singhabhishek@gmail.com",
//     age: 18,
//     address: "House Number, Colony, pincode, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
// const aboutUser = user1.about();
// console.log(aboutUser);


//  what if we needs millons of the user data then what we will do
//  hum bar bar user ki data ko input to nahi karenge so that's why 
//  we will create function which will take user info data as inputs

// these is best way

//  1).  function(that function create object)
//  2).  add key value pair
//  3).  object ko return krega

function createUser(firstName, lastName, email, age, address){
    const user = {}; 
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('Abhishek', 'Singh', 'singh@gmail.com', '18', 'Mirzapur uttar pradesh');
console.log(user1);

const is18 = user1.is18();
console.log(is18); // true

const about = user1.about();
console.log(about); // Abhishek is 18 year old.

// in these approach also have so setback(kameeyaa bhut hai esh me)
// so will keep inproving it in next file(76).