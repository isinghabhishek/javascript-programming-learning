//  some method

//  if any one satisfied the condition then it is true.
//  kya ek bhi number esa hai jo even hai
// then it will return true

const numbers = [3,5,8,11,9];
const ans = numbers.some((number)=>number%2===0);
console.log(ans);

//  real use 
// checking that any product whose price is above 100000
const userCart = [
    {productId:1, productName: "mobile", price: 15500},
    {productId:2, productName: "Laptop", price: 58500},
    {productId:3, productName: "LED TV", price: 18500},
    {productId:4, productName: "MacBook Pro", price: 255000},
];
const ans1 = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans1);

// here one item is with pricr moreThan 100000.
