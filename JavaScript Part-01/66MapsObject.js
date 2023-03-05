//   Maps() Data Structure
//   map is an iterable

//   store data in ordered fashion
//   store key values pair(like object)

//   duplicate keys are not allowed like Objects
//   different between maps  and Objects

//   objects can only have string or symbol
//   as key

// in maps you can use anything as key
// like  'array', 'number', 'string', 'Objects

//   Object literal
//   key -> string
//   key -> symbol
const person = {
    firstName: "abhishek",
    age: 22,
    1: "one" //string
}
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1])
// for(let key in person){
//     console.log(key);
    // console.log(typeof key);  // type of key
// }


//   Map stores key-value pairs
// key can be of any data type
const person1 = new Map();
person1.set('firstName', 'Abhishek');
person1.set('age', 22);
person1.set(1, 'one');
// person1.set([1,2,3], 'onetwothree');
// person1.set({1: 'one'}, 'onetwothree');
// console.log(person1);
// console.log(person1.get(1));
// // console.log(person1.keys());
// for(let key of person1.keys()){
//     console.log(key, typeof key);
// }

for(let [key, value] of person1){
    // console.log(Array.isArray(key));
    console.log(key, value);
}

// const person2 = new Map([['firstName', 'prthivi'],['age', 22]]);
// console.log(person2);

const person3 = {
     id: 005,
     firstName: "Abhishek"
}
const person4 = {
    id: 085,
    firstName: "Shelly"
}
const extraInfo = new Map();
extraInfo.set(person3, {age: 18, gender: "male"});
extraInfo.set(person4, {age: 22, gender: "female"});
console.log(extraInfo);
console.log(person3.id);
console.log(person4.firstName);
console.log(extraInfo.get(person4).gender);
console.log(extraInfo.get(person4).firstName);