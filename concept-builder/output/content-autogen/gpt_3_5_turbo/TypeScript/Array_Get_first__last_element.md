In TypeScript, the first and last elements of an array can be accessed using the `shift()` and `pop()` methods respectively. Here are some examples:

Example 1: Getting the first and last element of a string array

```typescript
const fruits: string[] = ["apple", "banana", "cherry", "date"];

// Get the first element of the array
const firstElement = fruits[0]; // "apple"

// Get the last element of the array
const lastElement = fruits[fruits.length - 1]; // "date"
```

Example 2: Getting the first and last element of a number array

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];

// Get the first element of the array
const firstNumber = numbers.shift(); // 1

// Get the last element of the array
const lastNumber = numbers.pop(); // 5
```

Note: The `shift()` method removes and returns the first element of the array, while the `pop()` method removes and returns the last element of the array.