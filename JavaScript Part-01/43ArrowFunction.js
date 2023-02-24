//   Arrow Function

//   function expresstion
// const singHappyBirthday = function(){
//     console.log("happy birthday to you .....");
// }
// singHappyBirthday();

//    Arrow function
const singHappyBirthday = () =>{
    console.log("happy birthday to you .....");
}
singHappyBirthday();


// Arrow function
const sumThreeNumbers = (number1, number2, number3) =>{
    return number1+number2+number3;
}
const ans = sumThreeNumbers(9,7,6);
console.log(ans);


// Arrow function of checking Even function
const isEven = number => {
    return number%2===0;
}
console.log(isEven(4));

// Another way of representing single input arrow function
const isEven1 = number1 => number1%2===0;
console.log(isEven1(99));

//   Arrow function  simple way for single input arrow function
const firstChar = anyString => anyString[0];
console.log(firstChar("singh"));

// Arrow function
const findTarget = (array, target) => {
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,6,45,90];
const ans3 = findTarget(myArray,45);
console.log(ans3);

