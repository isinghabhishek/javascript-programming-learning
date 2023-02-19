//  every method

const numbers = [2,4,6,9,10];

const ans = numbers.every((number)=>number%2===0); // every method will 
// return "true" if all number are even.

//  callback function --> true/ false (boolean)
//  every method will also returns --> true/ false, 
// but conditions must be satisfied by the all items.
console.log(ans);
// result is 'false' because 9 is  odd.
// if insted of 9 there is 8 then it will give 'true'.



//  real application
// check that every product prices is less than 50000
const userCart = [
    {productId:1, productName: "mobile", price: 15500},
    {productId:2, productName: "Laptop", price: 58500},
    {productId:3, productName: "LED TV", price: 18500},
    {productId:4, productName: "MacBook Pro", price: 255000},
]
const ans1 = userCart.every((cartItem)=>cartItem.price < 50000);
console.log(ans1);
// if any one item price is above 50000 then it will give false.
//  if all item price are lessthan 50000 then only it will give true.



