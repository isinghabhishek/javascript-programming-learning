//  Sets
// (it is iterable)
//  store data
//  Sets also have its own methos
//  no index-based access
//  order is not guaranteed
//  sets stores unique items only(no duplicates allowed)

const items = ['item1', 'item2', 'item3'];
const numbers = new Set(); // set syntax
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(['item1', 'item2']); // these array have diffrent address in memory
// jab bhi hum sq bracket laga ke naya array banate hai to oh alag hote hai
// numbers.add(['item1', 'item2']); // and, array have diffrent address in memory
// numbers.add(items);
// numbers.add(items); // these are not allowed bcz stroing the same array again
numbers.add(items);
console.log(items);

// has() method
if(numbers.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}
console.log(numbers);


for(let number of numbers){
    console.log(number);
}

// extracting new elements
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
console.log(myArray);

// find length
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);

