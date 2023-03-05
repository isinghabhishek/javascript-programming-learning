//   clone using Object.assign

// memory

const obj = {
    key1: "value1",
    key2: "value2"
}
// const obj2 = {...obj};  //  spread operator is new
const obj2 = Object.assign({}, obj);  // these is the old method of clonning in javaScript
console.log(obj);
console.log(obj2);

