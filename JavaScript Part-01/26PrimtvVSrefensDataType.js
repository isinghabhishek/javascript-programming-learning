//  Primitive Data Type  vs References Data Type

// Primitive Data Type
// There are 7 primitive data type
// 1. string
// 2. number
// 3. boolean
// 4. bigint
// 5. undefined
// 6. symbol
// 7. null

// NOTE: Primitive -------> value are stores in Stack Memory
// for primitive type variables different memory block created for each variable.
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("After Incrementing num1");
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);

// References(Non-primitive) Data Type
// 1. Objects
// 2. Arrays
// 3. Collections
// 4. Functions
// 5. Dates
// 6. other types of objects

// NOTE: Reference Types -----> values are stores in Heap Memory
// The object itself is stored on a heap, and its pointer is stored on a stack.
// The pointer is identified by the object's variable name, and points to that object.
// array --> stores in Heap
// array1 & array2 are store in stack(contains address of Heap memory)
// and address point to the Heap memory where data are store.
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3"); // item3 is store in Heap
console.log("After pushing element to Array1");
console.log("array1", array1);
console.log("array2", array2);
