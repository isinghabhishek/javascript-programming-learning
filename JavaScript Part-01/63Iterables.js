//   iterables
//  jispe hum for of loop laga sakein
//  string, array are iterable
//  object is not iterable

//  string
const firstName = "Abhishek";
for(let char of firstName){
    console.log(char);
}

// array
const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}

// objects are not iterable
// const users = {'key1':'values1', 'key2':'values2'};
// for(let item of users){
//     console.log(item);
// }


//  array like objects

// jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai
// ex:- string

const firstName1 = "Abhishek";
console.log(firstName.length);
console.log(firstName[2]);
