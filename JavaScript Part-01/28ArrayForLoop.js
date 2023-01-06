// for Loop In Array

let fruits = ["apple", "mango", "grapes", "banana"];
// for(let i=0; i<=9; i++){
//     console.log(i);
// }

// console.log(fruits.lenght); // size of array
// console.log(fruits[fruits.length-1]); // last index

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
    // console.log(fruits[i].toUpperCase());   // printing in upper case
}


// creating new array
let fruits2 = [];
for(let i=0; i<fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);