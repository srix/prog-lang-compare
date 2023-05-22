A constant in TypeScript is a variable declared with the `const` keyword, whose value cannot be reassigned after it is initialized. Here is an example of how to use constants in TypeScript:

```typescript
const PI: number = 3.14;
const MY_NAME: string = "John";

console.log(PI); // Output: 3.14
console.log(MY_NAME); // Output: John

// Uncommenting the below line will cause a syntax error as you cannot reassign a constant
// PI = 3.14159;
```

In the above example, two constants `PI` and `MY_NAME` are declared with the `const` keyword. Once their values are assigned, they cannot be changed. 

Constants are useful when you have values that should remain the same throughout the program and should not be changed accidentally.