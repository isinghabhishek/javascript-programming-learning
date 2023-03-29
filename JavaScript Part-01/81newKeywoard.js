//   new keywoard

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
const user1 = new createUser("abhishek", 18);
console.log(user1);
//o/p--> createUser {firstName: 'abhishek', age: 18}
//       age: 18
//       firstName: "abhishek"
//       [[Prototype]]: Object
//  new Keywoard
// 1.) empthy Object ko create kar raha hai -->  this = {}
// 2.) return this
// 3.) new keywoard do work of it--> Object.create(createUser, prototype);
//  which we need to do manually ie. explained in the previous slides

// new Keyword khud se hi link banadega "__proto__" se jo
// hum preveous slides me manually(Object.create(createUser, prototype)) kar rahe the
// new keyword byDefault "__proto__" ke value ko prototype ke equal set kar dega
// "__proto__" references hai, "__proto__" hume "prototype" tak leke jaye gaa
// "prototype" tak hume "__proto__" pahuchayegaa

// javaScript ko koe chej user me naa mile tho javaScript aage "prototype" tak jaye gaa
// "prototype" tak hume "__proto__" pahuchayegaa
//user1.about();

