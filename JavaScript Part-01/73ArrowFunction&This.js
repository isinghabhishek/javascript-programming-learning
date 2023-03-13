//  arrow function

// arrow function me this nahi hotha
// arrow function ka "this" jo hota usho oh apne surrounding's se letha hai
// 'this' lega ek level up yani ke 'window' hoga es case me

const user1 = {
    firstName: "Abhishek",
    age: 18,
    about: () => {
        console.log(this.firstName, this.age);
    }
}
// user1 will not be "this" for arrow function
// this ek level up-hogaa matlb--> "window" hogaa
user1.about(); // op--> undefined undefined


