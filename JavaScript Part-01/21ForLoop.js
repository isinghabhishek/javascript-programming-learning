//  For loop

for(let i=0; i<=9; i++){
    console.log(i);
}
console.log("When we Use let i doesnot defined outside of culybrasses");

// Another way of for loop {Not Use}  Ask In InterViews
// let k=0;
// for(k<=9; k++;){     // Not Right Way
//     console.log(k);
// }
// console.log("When we Use let k outside of the for loop now it is defiend  outside of culybrasses");


// diffrences in let And var
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