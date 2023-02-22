//  For loop

// let, const => block-scoped variable
// var => fuction-scoped

// "let" variable is block Scoped
for(let i=0; i<=9; i++){
    console.log(i);
}
console.log("When we Use let i does't defined outside of cullybrasses");

// Another way of for loop {Not Use}  Ask In InterViews
// let k=0;
// for(k<=9; k++;){     // Not Right Way
//     console.log(k);
// }
// console.log("When we Use let k outside of the for loop now it is defiend  outside of culybrasses");

// "var" is global scope variable
// diffrences in let And var
// "var" is limited to function in which it defined
for(var i=0; i<=9; i++){
    console.log(i);
}
console.log("Value of i Is", i);

// For Loop Example

let total = 0;
let num = 100;
for(let l=0; l<=num; l++){
    total = total + l;
}
console.log(total);