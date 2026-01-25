To find all elements of an array satisfying a condition in JavaScript - ECMAScript 2021, you can use the `Array.prototype.filter` method, which creates a new array with all elements that pass the specified condition.

The syntax for `Array.prototype.filter` is as follows:

```javascript
const newArray = array.filter(function(element) {
  // Condition to be checked
});
```

Here `newArray` is the new array returned by the `filter()` method, `array` is the original array, and `element` is the current element being processed.

For example, let's say we have an array of numbers and we want to find all even numbers from it. We can use the `filter()` method to achieve it as below:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8]
```

In this example, we passed a function to `filter()` that checks if the element is even or not. If the element is even, it returns true, else false. The `filter()` method creates a new array `evenNumbers` containing only the even numbers from the original array `numbers`.

You can also use arrow function expression syntax to achieve the same result as follows:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8]
```

In this syntax, you can use shorthand `() => {}` syntax to define the callback function for the `filter()` method.

This is how you can find all elements of an array satisfying a condition in JavaScript - ECMAScript 2021.