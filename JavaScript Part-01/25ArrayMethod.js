
// Array are mutable
// Array   push   pop
//**push and pop are fast as compared to the shift and unshift

//  push -----> item are Added at last
let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
fruits.push("banana");
console.log(fruits);


//  pop  -----> items are removed from last
let fruits1 = ["apple", "mango", "grapes"];
console.log(fruits1);
let poppedFruits = fruits1.pop();
console.log(fruits1);
console.log("popped fruits is", poppedFruits);



// Array shift unshift

//  unshift -----> items are Added from start
let fruits2 = ["apple", "mango", "grapes"];
console.log(fruits2);
fruits2.unshift("banana");
fruits2.unshift("kiwi");
console.log(fruits2)

// shift ---> items are removed from start
let fruits3 = ["apple", "mango", "grapes"];
console.log(fruits3);
let removedFruits = fruits3.shift();
console.log(fruits3);
console.log("removed fruits is", removedFruits);
