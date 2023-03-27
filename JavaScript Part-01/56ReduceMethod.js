// Reduce method

// Ex:1
const numbers = [1,2,3,4,5,10];
// aim: sum of all the numbers in array.

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum); // 25
//  accumulator     currentValue    return
//    1                 2             3
//    3                 3             6
//    6                 4             10
//    10                5             15
//    15                10            25


// Ex:2[Add To Cart] feature
//  Real Application --> Add to cart Method
const userCart = [
    {productId:1, productName: "mobile", price: 15500},
    {productId:2, productName: "Laptop", price: 58500},
    {productId:3, productName: "LED TV", price: 18500},
    {productId:4, productName: "MacBook Pro", price: 255000},
]
const totalAmount = userCart.reduce((totalPrice, currentProduct) =>{
    return totalPrice + currentProduct.price;
}, 0);
console.log(totalAmount);
// totalPrice       currentValue     return
//  0                  {}             15500
//  15500              58500          74000
//  74000              18500          92500
//  92500              255000         347500
