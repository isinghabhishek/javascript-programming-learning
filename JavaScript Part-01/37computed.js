// Computed Properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// our desired result that we need to find by using computed properties
// "key1" variable ke value("objkey1") ko 
// "value1" variable ke value("myvalue1") ko assign karne hai
// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2"
// }

// computed properties--> ek variable ke value to dushre variable ke value ko assign karana

// using computed properties
// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }
// console.log(obj);


// Another Way of using computed properties
const obj = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

// using computed properties we get, result
// objkey1: "myvalue1"
// objkey2: "myvalue2"
