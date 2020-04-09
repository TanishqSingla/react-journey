var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
let mappedNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(mappedNumbers);

//Filter - Create a new array by keeping the items that return true.
let filteredNumbers = numbers.filter((num) => num < 10);
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
let reduce = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(reduce);
//Find - find the first item that matches from an array.
let found = numbers.find((num) => num > 10);
console.log(found);

//FindIndex - find the index of the first item that matches.
let index = numbers.findIndex((num) => num > 10);
console.log(index);
