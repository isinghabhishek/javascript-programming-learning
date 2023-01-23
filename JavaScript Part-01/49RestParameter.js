// Rest Parameter

// with the help of the rest parameter we can put the 
// rest elments in the form of array in "c" by using (...c)

function myFunc(a,b,...c){ 
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `, c);
}
myFunc(2,3,4,5,6,7,8,9);


// rest parameter use
function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total+number;
    }
    return total;
}
const ans = addAll(2,3,4,5,6,7,8,9);
console.log(ans);