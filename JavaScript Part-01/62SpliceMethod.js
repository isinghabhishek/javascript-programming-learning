//  splice method
//  startIdx, delete,  insert

//  array ke bich me se kuch 'delete' karna,
//  ya 'insert' karna

const myArray = ['item1', 'item2', 'item3'];

//  delete
//               startIdx, delete
// myArray.splice(  1,      1);
// console.log(myArray);

// here we can also store the delete item also in variable
// const deletedItem = myArray.splice(1, 2);
// console.log(deletedItem);


// we can store the deleted item
// const deletedItem = myArray.splice(1, 2);
// console.log("deleted Item is:", deletedItem);
// console.log(myArray);


// insert
//               startIdx, delete,    insert
// myArray.splice(  1,       0,     'inserted item');
// console.log(myArray);


//  insert and delete both together
// startingIdx 1 se 2 item delete karna hai  or inserted karna hai "inserted item" 
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2");
console.log("delete item", deletedItem);
console.log(myArray);