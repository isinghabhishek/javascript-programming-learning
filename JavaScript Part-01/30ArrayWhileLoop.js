//  While loop in Arrray

const fruits = ["apple", "mango", "grapes", "banana"];

// let i = 0;
// while(i<fruits.length){
//     console.log(fruits[i].toUpperCase());
//     i++;
// }


//  creatin new array in upper case
const fruits2 = [];

let k = 0;
while(k<fruits.length){
    fruits2.push(fruits[k].toUpperCase());
    k++;
}
console.log(fruits2);