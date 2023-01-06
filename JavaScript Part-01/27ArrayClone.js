// How to Clone Arrray

let array1 = ["item1", "item2"];

// let array2 = ["item1", "item2"]; // not effective


// clonning using slice method ---> fast method

// let array2 = array1.slice(0);  // 0(st idx) --> n(last idx)
// let array2 = array1.slice(0).concat(["item3", "item4"]);  // adding new elements


// clonning using Concatination

// let array2 = [].concat(array1);  
// let array2 = [].concat(array1, ["item3", "item4"]); // clonning and adding new elements

let oneMoreArray =  ["item3", "item4"];
// New Way
//  spread operator
//  let array2 = [...array1];
// let array2 = [...array1, "item3", "item4"];  // adding new elements  
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");
console.log(array1===array2);
console.log(array1);
console.log(array2);