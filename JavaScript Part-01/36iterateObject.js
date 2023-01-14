//  Iterate Object

const person = {
    name: "abhishek",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop

// for(let key in person){
//     console.log(person[key]);
// }

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key,":",person[key]);
// }

// iterating using --> Object.keys
console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}