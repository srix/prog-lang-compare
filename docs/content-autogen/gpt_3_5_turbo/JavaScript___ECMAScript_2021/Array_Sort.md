In JavaScript - ECMAScript 2021, there are several ways to sort an array. Here are some examples:

1. Using the sort() method: The sort() method sorts the elements of an array in place and returns the sorted array. It takes an optional function as an argument, which defines the sort order. By default, it sorts the array in ascending order.

Example:

```javascript
const fruits = ['banana', 'apple', 'orange', 'watermelon', 'grape'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange', 'watermelon']
```

2. Using a custom sort function: You can define your own sorting function to customize the sort order. The function should take two arguments and return a positive number if the first argument should come before the second, a negative number if it should come after, and zero if they are equal.

Example:

```javascript
const numbers = [10, 30, 20, 5, 15];
numbers.sort((a, b) => a - b); // sort in ascending order
console.log(numbers); // Output: [5, 10, 15, 20, 30]

numbers.sort((a, b) => b - a); // sort in descending order
console.log(numbers); // Output: [30, 20, 15, 10, 5]
```

3. Using the spread operator and the spread syntax: You can use the spread operator (...) and the spread syntax to clone the array, sort it, and create a new sorted array.

Example:

```javascript
const originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedArray = [...originalArray].sort();
console.log(sortedArray); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]
```