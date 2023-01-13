//   for in loop in array

const fruits = ["apple", "mango", "grapes", "banana"];

for(let index in fruits){
    console.log(fruits[index]);
}

// pushing fruits in new array in upper case
const fruits2 = [];
for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);