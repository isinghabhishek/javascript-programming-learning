
// break keyword
for (let i = 1; i <= 10; i++) {
  if (i === 4) {// (i == 4) loop will break
    break;
  }
  console.log(i);
}
console.log("Namaste World");

// continue keyword
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    continue; // 4 will skip
  }
  console.log(i);
}
console.log("Namaste World");
