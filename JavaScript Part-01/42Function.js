//      Function

//   Function Declaration
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }
// singHappyBirthday();  // Calling Function

//    Function Expression
const singHappyBirthday = function(){
    console.log("happy birthday to you ....");
}
singHappyBirthday();

// dry--> don't repeat yourself


// Two Number Sum

//  function declaration
// function sumTwoNumbers(number1, number2){
//     return number1+number2;
// }
// const returnedValue = sumTwoNumbers(4,6);
// console.log(returnedValue);

//  Function  Expresstion
const sumTwoNumbers =function(number1, number2){
    return number1+number2;
}
const ans1 = sumTwoNumbers(9,7);
console.log(ans1);



//   Check The Given No Is Even Or Not.
//    function decraltion
//   ##1   isEven
// function isEven(number){
//     if(number%2===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(5))

// ##2    Another Way
function isEven1(num1){
    if(num1%2===0){
        return true;
    }
    return false;
}
console.log(isEven1(8));

// ##3   shortest way of Checking A even No
function isEven2(nums){
    return nums%2===0;
}
console.log(isEven2(9));

// expresstion
const isEven3 = function(no){
    return no%2===0;
}
console.log(isEven3(10))


//  create function which take string as input

// function firstChar(anyString){      // function decralation
const firstChar = function(anyString){   // function expresstion
    return anyString[0];
}
console.log(firstChar("abc"));

// create function 
// input: array, target(number)
//output: index of target if target present in array


// function findTarget(array, target){  // normal function declaration
// Binary Search
    const findTarget = function(array, target){  // function expretion
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,6,45,90];
const ans = findTarget(myArray,45);
console.log(ans);


