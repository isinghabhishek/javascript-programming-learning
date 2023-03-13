//   short syntax

// const user = {
//     firstName: "Abhishek",
//     age: 18,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }
// }

// object ke andar jo function hote hai unko methods kah te hai

//  both above and below codes are same
const user1 = {
    firstName: "Abhishek",
    age: 18,
    about(){
        console.log(this.firstName, this.age);
    }
}
user1.about();