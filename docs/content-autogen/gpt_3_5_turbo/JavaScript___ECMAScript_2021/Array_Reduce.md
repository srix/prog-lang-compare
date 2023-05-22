In JavaScript (ECMAScript 2021), we can use the `Array.reduce()` method to reduce an array to a single value. The `reduce()` method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

Syntax:

```
array.reduce(function(accumulator, currentValue, currentIndex, array) {
  // operation to reduce the array here
}, initialValue);
```

The `reduce()` method takes two arguments: a callback function and an optional initial value for the accumulator.

The callback function takes four arguments: the accumulator, the current element value, the current element index, and the array itself. The callback function should return the new value to be used as the accumulator.

Example 1: 

Let's say we want to reduce an array of numbers to its sum:

```
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum); // 15
```

In this example, the `reduce()` method takes an initial value of 0 for the accumulator. The callback function takes two arguments: the accumulator and the current element value. The function returns the sum of the accumulator and the current value, which becomes the new value of the accumulator in the next iteration.

Example 2:

Let's say we want to reduce an array of strings to its longest length:

```
const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
const longestLength = words.reduce(function(accumulator, currentValue) {
  if (currentValue.length > accumulator) {
    return currentValue.length;
  } else {
    return accumulator;
  }
}, 0);
console.log(longestLength); // 10
```

In this example, the `reduce()` method takes an initial value of 0 for the accumulator. The callback function takes two arguments: the accumulator and the current element value. The function checks if the length of the current value is greater than the accumulator. If true, it returns the length of the current value as the new accumulator value, otherwise it returns the current accumulator value.