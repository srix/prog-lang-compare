In TypeScript, we can check if a string is a number by using the `isNaN()` function.

Here's an example:

```typescript
const str1 = '123';         // number string
const str2 = '1.23';        // number string
const str3 = 'hello';       // non-number string
const str4 = '123abc';      // non-number string

console.log(!isNaN(Number(str1)));     // Output: true
console.log(!isNaN(Number(str2)));     // Output: true
console.log(!isNaN(Number(str3)));     // Output: false
console.log(!isNaN(Number(str4)));     // Output: false
```

In the above example, we are using the `Number()` method to convert a string into a number. If the string is not a valid number, the `Number()` method will return NaN. So, we can use `isNaN()` to check if the number is valid or not.

The `isNaN()` function returns `true` if the number is `NaN`, otherwise it returns `false`. So, we are converting the result of `!isNaN(Number(str))` to boolean to get the desired output.

In this example, `str1` and `str2` are valid number strings, so the output will be `true`. `str3` and `str4` are non-number strings, so the output will be `false`.