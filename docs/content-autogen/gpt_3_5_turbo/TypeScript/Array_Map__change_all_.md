To change all elements of an array in TypeScript, you can use the `map()` method. The `map()` method creates a new array with the results of calling a provided function on every element in the original array.

Here's an example:

```typescript
// define an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// use the map() method to change all elements of the array
const doubledNumbers: number[] = numbers.map(num => num * 2);

// print the new array with all elements changed
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

In this example, we are defining an array of numbers called `numbers`, which has values from 1 to 5. We then use the `map()` method to multiply each value by 2, creating a new array called `doubledNumbers`. Finally, we print the new array to the console, which shows each original element has been changed.

You can use the `map()` method with any type of array, not just numbers. Just make sure that the function you provide to `map()` correctly handles the type of data in the original array.