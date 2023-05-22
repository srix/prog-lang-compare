To sort an array in TypeScript, you can use either the `sort` method or the `sorted` function.

1. Using the `sort` method:
The `sort` method sorts the elements of an array in place and returns the sorted array. Here's an example:

```typescript
let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
array.sort();
console.log(array); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

In this example, the `sort` method sorts the elements of the array in ascending order.

2. Using the `sorted` function:
The `sorted` function creates a new sorted array from the elements of the original array. Here's an example:

```typescript
let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let sortedArray = array.sorted();
console.log(sortedArray); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```

In this example, the `sorted` function creates a new array with the elements of the original array sorted in ascending order. The original array remains unsorted.