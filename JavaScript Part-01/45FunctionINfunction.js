//   Function Inside Function
// in java script we can create function inside function

function app(){
    const myFunc = ()=>{
        console.log("hello from myFunc");
    }

    const addTwo = (num1, num2) =>{
        return num1+num2;
    }

    const mul=(num1, num2) => num1*num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(4,3));
    console.log(mul(4,3));
}
app();