//  IDEA: filter  Method
// NOTE: 'filter method' will filter out value according to the give condition

// BUG: 1. JavaScript is a Oops language
// TODO: 2.
// FIXME: 3.
// BUG: 4. Variables
// HACK: 5.
// INFO: 6.

// these be use to filter out the both even and odd numbers.
// with the help of the filter function it stores only
// that number which is odd.

const numbers = [1, 3, 2, 6, 4, 8];
const isOdd = function (number) {
  return number % 2 !== 0;
};
const oddNumber = numbers.filter(isOdd);
console.log(oddNumber);

// with the help of the filter function it stores only
// that number which is even.

// simple above funtion using callback function & arrow function
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);
