

function myFunction(pow){
    return function(num){
        return num ** pow
    }
}
// calculating Squares
const square = myFunction(2);
const ans = square(3);
console.log(ans);


// calculating cubes
const cube = myFunction(2);
const ans1 = cube(3);
console.log(ans);