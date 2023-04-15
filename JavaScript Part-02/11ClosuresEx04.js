

function func(){
    let count=0;
    return function(){
        if(count < 1){
            console.log("Hi, You Called me");
            count++;
        }else {
            console.log("Mai already ek bar call ho chuka hoon!")
        }
    }
}
const myFunc = func();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();