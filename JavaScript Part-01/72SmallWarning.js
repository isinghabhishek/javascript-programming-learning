//  

const user1 = {
    firstName: "Abhishek",
    age: 18,
    about: function(){
        console.log(this.firstName, this.age);
    }
}

//  don't  do this  mistakes
// these not right way here we call we need to bind
const myFunc = user1.about;

// user1.about();

//const myFunc = user1.about.bind(user1);
myFunc();