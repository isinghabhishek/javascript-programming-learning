//  spread Operator

// spread operator in Arrays
// we have see early
const array1 = [1,2,3];
const array2 = [5,6,7];

const newArray = [...array1, ...array2,];
console.log(newArray);

// const newArray1 =[..."abc"];
// const newArray1 =[...123456789];  // not valid  (123456789 is not iterable)

//  strings are iterable(valid)
const newArray1 =[..."123456789"];  
console.log(newArray1);


// spread operator in Objects
const obj1 = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value59"
 };
 const obj2 = {
    key1 : "valueUnique", 
    key3 : "value3",
    key4 : "value4"
};

const newObject = { ...obj1, ...obj2};
console.log(newObject);
// result
// {key1: 'valueUnique',  // catch--> key1 value changes
// key2: 'value2', 
// key3: 'value3', 
// key4: 'value4'}

// ek object me ek se jade key nahi ho sakthe
//const newObject = { ...obj2, ...obj1, key36: "value36"};
console.log(newObject)
// result
// key1: "value1"
// key2: "value2"
// key3: "value59"
// key4: "value4"
// key36: "value36

// with the help of object we can use spread operator
const newObject1 = { ..."abcdefghijklmnopqrstuvwxyz"};
console.log(newObject1);