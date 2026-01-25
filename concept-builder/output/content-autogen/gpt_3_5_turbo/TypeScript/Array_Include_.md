In TypeScript, we can use the `includes()` method to check if an array includes a specific element. The `includes()` method returns true if the element is found in the array, otherwise it returns false.

Here is an example of how to use the `includes()` method in TypeScript:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];

// Check if the array includes the number 3
const includesThree: boolean = numbers.includes(3);
console.log(includesThree); // Output: true

// Check if the array includes the number 6
const includesSix: boolean = numbers.includes(6);
console.log(includesSix); // Output: false
```

In this example, we have an array of numbers and we are using the `includes()` method to check if the array includes the numbers 3 and 6. The `includes()` method returns true for the number 3 and false for the number 6.