In JavaScript - ECMAScript 2021, you can use the `Array.prototype.slice()` method to get the first and last element of an array.

To get the first element of an array, you can use the `slice()` method with an argument of `0` (which represents the starting index). To get the last element of an array, you can use the `slice()` method with an argument of `-1` (which represents the last index).

Here are some examples:

```javascript
// First element of an array
const myArray = [1, 2, 3, 4, 5];
const firstElement = myArray.slice(0, 1)[0];
console.log(firstElement); // Output: 1

// Last element of an array
const lastElement = myArray.slice(-1)[0];
console.log(lastElement); // Output: 5
```

Alternatively, you could also use array destructuring to access the first and last elements of an array:

```javascript
// First and last elements of an array using array destructuring
const [first, ...middle, last] = myArray;
console.log(first); // Output: 1
console.log(last); // Output: 5
```