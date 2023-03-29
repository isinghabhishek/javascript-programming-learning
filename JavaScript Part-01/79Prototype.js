
// javaScripts functions are combination of ===> function + Object

function hello(){
    console.log("Hello world");
}
//console.log(hello.name);
hello();
console.log(hello);
//  name property --> tells function name;

//javaScript function will work as "function" as well as "object" also.

//  you can add your own properties

//  name property --> tells function name;
//  function provied more usefull properties

// jab hum function create karte hai to hume
// wushme free space jo mil the hai "prototype".

// actual mei free spaces jesa kuch nahi hota
// free space mai empty object {} ko bolaa ja raha hai sirf samjane ke liye aapko
// javaScript functions ===> function + object 


//console.log(hello.prototype);
// o/p-->  constructor: ƒ hello()
//         [[Prototype]]: Object

// only function provied prototype property
// call, apply, bind method bhi provide karta hai function

// "__proto__" and "prototype" dono agal hai
// "__proto__" ek references hai jo, chain create kartha hai(references)
// "prototype" simple object hai

// we can create "__proto__" & "prototype" connection

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "la al ala la ";
}
console.log(hello.prototype);
console.log(hello.prototype.sing());

// "prototype" --> function ke sath hume free ke space milthe
// hai jisme hum function se related key-value pair add karshkthe aha