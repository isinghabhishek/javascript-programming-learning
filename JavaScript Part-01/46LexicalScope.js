//  lexical scope

// lexical scope means that if a variable is defined anywhaer in code
// and we call it from function function inside function
// javascript will be able to fatch th value of variable 
// global scope also
// first java script checks it in the lexical scope(inside the function where it is called)
// lexical scope(inside the function where it is called)
// then javascript will look for it in the global scope

// const myVar = "value1";

// function myApp(){

//     function myFunc(){
//         // const myVar = "value59"; //javscript first check variable inside it's function first
//         console.log("inside myFunc", myVar); 
//     }

//     console.log(myVar);
//     myFunc();
// }
// myApp();

// #2
// 
const myVar = "value1"; // myVar defined in the global scope of code

function myApp(){

    function myFunc(){
        // lexical scope of myFunc
        // const myVar = "value59";
        const myFunc2 = ()=>{
            console.log("inside myFunc", myVar);  
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}
myApp();