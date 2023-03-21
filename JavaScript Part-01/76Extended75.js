//  jethne bar user banegga uthe ni baar  methods banegaa our 
//  hamare memory me uthni he methods store honge
// user1 object banega usme bhi 'about' & 'is18' method honge
// user2 object banega usme bhi 'about' & 'is18' method honge
// user3 object banega usme bhi 'about' & 'is18' method honge
// these is setback that we need to optimize
//  suppose ke 1 millon user hai to 1 million baar methods bhi store honge
//  memory me our memor jade use hoge we need to optimize it
//  we need only one copy of methods
//  javascript store it's references type


// userMethod kar ke object create kar lenge
// har object ke liye same hai methods
// ek objects ke andar in methods ko store kar lenge
// hum ek copy banake rakh lenge ur ush ko use karenge
const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function(){
        return this.age >= 18;
    }    
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // creating the referencs(address) of the 'about' & 'is18' function
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('Abhishek', 'Singh', 'singh@gmail.com', '18', 'Mirzapur uttar pradesh');
const user2 = createUser('Abimaniyu', 'dev', 'singh@gmail.com', '16', 'prayagraj uttar pradesh');
const user3 = createUser('prithivi', 'chauhan', 'singh@gmail.com', '24', 'varanasi uttar pradesh');
const user4 = createUser('Raaj', 'Rajput', 'singh@gmail.com', '14', 'Delhi ');

console.log(user2.about());
console.log(user4.about());

// in these code also have some kameeyaa we need to improve
// need to optimize it improveing our code