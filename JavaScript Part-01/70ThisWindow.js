//  this & window are same and result are also same

//  this keywoard

// window object --> global object

// console.log(this);
// console.log(window);



// use of "use strict" mode prevent form errors
"use strict"
function myFunc(){
    console.log(this);
}
myFunc();