To count the number of elements in an array matching a condition in TypeScript, you can use an array method called `filter()` along with the `length` property. Here's an example:

```typescript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// count the number of even numbers
const count = numbers.filter(num => num % 2 === 0).length;

console.log(count); // Output: 5
```

In the above example, the `filter()` method is used to create a new array that contains only even numbers from the `numbers` array. Then, the `length` property is used to get the number of elements in the filtered array, which is the same as the count of even numbers in the original array. 

You can replace the condition in the `filter()` method to count elements matching any other condition. For instance, to count the number of elements that are greater than 5 in the `numbers` array, you can write:

```typescript
const count = numbers.filter(num => num > 5).length;
console.log(count); // Output: 5
``` 

In this example, the `filter()` method is used to create a new array that contains only numbers greater than 5 from the `numbers` array. Then, the `length` property is used to get the number of elements in the filtered array, which is the same as the count of numbers greater than 5 in the original array.