//   Default Parameter

// with the help of default parameter
// we can assign a parameter equal to x=zero

function addTwo(a, b) {
  if (typeof b === "undefined") {
    b = 0;
  }
  return a + b;
}
const ans = addTwo(4);
console.log(ans);

//  using the Default parameter
// easy way to do so
function addTwo(a, b = 0) {
  return a + b;
}
const ans1 = addTwo(4);
console.log(ans1);
