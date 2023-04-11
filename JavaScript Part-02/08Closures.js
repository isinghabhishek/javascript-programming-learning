// closures


// function can return functions

// function outerFunction() {
//     function innerFunction(){
//         console.log("Hello World");
//     }
//     return innerFunction; // o.p--> will be complete innerFunction will be printed
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();

function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName,lastName);
    }
    return printName;
}

const ans = printFullName("Abhishek", "Singh");
// console.log(ans);
ans();