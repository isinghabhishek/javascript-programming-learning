//  function returning function

// returning what every is given
// function myFunc(){
//     return [1,2,3,]
// }
// const ans = myFunc();
// console.log(ans);



// Function returning the function

function myFunc(){
    function hello(){
        // console.log("Namaste World");
        return "Namaste World";
    }
    return hello;
}
const ans1 = myFunc();
// ans1();
console.log(ans1());