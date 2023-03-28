//  optional chaining

const user = {
    firstName: "abhishek",
    // address: {houseNumber: '1234'}
}
// hum jante hai ki value abhi exist nahi kar rahi,
// par future me value to exist kare ge
// tho ye error naa de (instend of error it give --> Undefined)
// so we use ?(optinal chaining)
console.log(user?.firstName);
console.log(user?.address?.houseNumber);
