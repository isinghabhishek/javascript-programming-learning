//   Block Scope vs Function Scope

// 'let' and 'const' are block scope.

// 'let' and 'const' are Accessible in the same Block.
// 'let' and 'const' are mostly use.

// block #1
{
  let firstName = "abhishek";
  console.log(firstName);
}

// block #2
{
  const firstName = "prithvi";
  console.log(firstName);
}

// 'var' is function scope.
// 'var' is accessible from outside of the block.
// "var" is global scope we can access it all over code(main function)
{
  var firstName = "singh";
}
console.log(firstName);

// use of Block Scope

//  #01
//  if(ture){
//      let firstName = "Abhishek";
//      console.log(firstName);
//  }
//  console.log(firstName);  // these will generate error.

//  #02
// if(true){
//     var firstName1 = "Abhishek";
//     console.log(firstName1);
// }
// console.log(firstName1);

// #03 using 'let' & 'const'
function myApp() {
  if (true) {
    let firstName1 = "Abhishek";
    console.log(firstName1);
  }
  if (true) {
    console.log(firstName1);
  }
  console.log(firstName1);
}
myApp();

// #04  useing 'var'
// function myApp(){
//     if(true){
//         var firstName1 = "Abhishek";
//         console.log(firstName1);
//     }
//     if(true){
//         console.log(firstName1);
//     }
//     console.log(firstName1);
// }
// myApp();
