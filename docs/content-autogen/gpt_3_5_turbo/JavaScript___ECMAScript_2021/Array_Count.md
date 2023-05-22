To count the number of elements in an array matching a condition in JavaScript (ECMAScript 2021), you can use the `filter()` method to retrieve a new array containing all elements that pass the specified condition. Then, you can use the `length` property of the filtered array to get the count of elements that match the condition.

Here's an example:

```javascript
// Sample array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Count the number of even numbers in the array
const evenNumbersCount = numbers.filter(number => number % 2 === 0).length;

console.log(`There are ${evenNumbersCount} even numbers in the array.`);
// Output: There are 5 even numbers in the array.
```

In this example, the `filter()` method is used to create a new array called `evenNumbers` that contains only the even numbers from the original `numbers` array. Then, `evenNumbers.length` is used to get the count of even numbers in the array, which is outputted to the console.

You can modify the condition to match different criteria depending on the requirements of your particular use case.