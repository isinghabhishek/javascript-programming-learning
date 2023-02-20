//   fill method
//   value,  startIdx,  endIdx
//    0,      2,      5    ko zero se fill karna hai

const myArray = new Array(10).fill(-1);
console.log(myArray);


const myArray1 = [1,2,3,4,5,6,7,8,9];
myArray1.fill(0,2,5);
//   value,  startIdx,  endIdx   // [1, 2, 0, 0, 0, 6, 7, 8]
//    0,      2,      5    ko zero se fill karna hai
console.log(myArray1);
