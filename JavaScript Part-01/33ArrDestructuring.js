// Array Destructuring

const myArray = ["value1", "value2", "value3", "value4"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1 is", myvar1);
// console.log("value of myvar2 is", myvar2);



// Destructuring

// let [myvar1, , myvar2, myvar3] = myArray;  // normal
// in above in "myvar2" we store "value3" ie. we skiped one

// Another Way putting the rest vale in the new Array
// myNewArray --> // will store all the rest value
let [myvar1, myvar2, ...myNewArray] = myArray;  
// let myNewArray = myArray.slice(2);  //  Using the Sliceing method for creating new Array
console.log("value of myvar1 is", myvar1);
// in "myvar1" --> "value1" will be store 

console.log("value of myvar2 is", myvar2);
// in "myvar2" --> "value2" will be store

// console.log("value of myvar3 is", myvar3);

console.log(myNewArray); 
// myNewArray --> // will store all the rest value