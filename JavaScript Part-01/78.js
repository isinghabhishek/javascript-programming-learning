
const obj1 = {
    key1: "value1",
    key2: "value2"
}
// const obj2 = {
//     key3: "value3"
// }
// console.log(obj2.key3);  // o/p--> value3
// console.log(obj2.key1);  // o/p--> undefined

//  we want that javascript ko agar obj2 me 'key1' naa mile tho oo 
//  khud 'obj1' ke paas jaye ohaa pee dekhe ki 'obj1' me 'key1' hai ke nahi hai to hume dede
//  khud 'obj1' ke pass jaye oha pe dekhe ki 'key1' hai to muje de de


//   "__proto__"

//  offcial ecmascript documentation

//  "[[prototype]]"

// "__proto__"  ,  "[[prototype]]"  --> both are same

//  __proto__ ki madth se javaScript jo cheese 'obj2' 
//  me nahi ho tho wo usko 'obj1' se lelega bcz 'obj1' is stored in "[[prototype]]"

//  "prototype"  -->  this is diffrent from above two

//  there is one more way to creat empty Object
//  Object.create(); 
const obj2 = Object.create(obj1);  //  o/p--> {} 
// phale javaScript obj2 me dekhe ga agar wohaa pe hai ya nahi key
// to wo ushko pher wshko obj1 me dekhe ga
//  Object.create(); 
//  this helps in stabiliting the connection b/w 'obj1' & 'obj2'. 
//  this helps in creating 'obj1' properties in the 'obj2', 
// with help of javaScript "[[prototype]]" object 
//  JavaScript  ko jo chej 'obj2' se nahi mili to usne use 'obj1' se leli.

obj2.key3 = "value3";
// obj.key2 = "uniqueKey";
console.log(obj2.key2); //op--> value2

console.log(obj2);
// o/p--> key3: "value3"
//        [[Prototype]]: Object


//  this is happening
console.log(obj2.__proto__);  //  'obj2' ko proto 'obj1' ho gaya
//  'obj2' ko proto 'obj1' ho gaya with help of Object.create() function
// const obj2 = Object.create(obj1);
// o/p--> key1: "value1"
//        key2: "value2"
//        [[Prototype]]: Object

//  JavaScript  ko jo chej  'obj2' se nahi mili usne usko "__proto__" or "[[prototype]]"  se leli jahaa pe obj1 stored hai.

// abhi humne bat ki __proto__ ki jishko documentation mein [[prototype]] 
// likha hua hai broweser ke console mei __proto__ bhi likha 
// ho saktha hai aur [[prototype]] bhi likha ho sakta hai
// javaScript mai ek prototype property alag se bhi hoti hai 
// uske barein mai detail mei baat krenge
