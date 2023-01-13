// for Of loop in Array

const fruits = ["apple", "mango", "grapes", "banana"];

for(let fruit of fruits){
    // console.log(fruit);
    console.log(fruit.toUpperCase());
}


// creating new array and pushing the elements of array in array2
const fruits2 = [];
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);


// normal traiditional --> for loop
for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}