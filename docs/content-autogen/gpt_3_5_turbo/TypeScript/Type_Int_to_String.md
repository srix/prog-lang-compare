Certainly! To convert an integer to a string in TypeScript, you can simply call the `.toString()` method on the integer value. Here's an example:

```typescript
let num: number = 42;
let numAsString: string = num.toString();

console.log(num);  // Output: 42
console.log(numAsString);  // Output: "42"
```

In this example, we first define a variable `num` with the value of `42` as a number type. We then call the `.toString()` method on `num` and assign the resulting string value to the `numAsString` variable. Finally, we log both values to the console to confirm that the conversion was successful.

You can also use the built-in `String()` function to convert a number to a string, like this:

```typescript
let anotherNum: number = 3.1416;
let anotherNumAsString: string = String(anotherNum);

console.log(anotherNum);  // Output: 3.1416
console.log(anotherNumAsString);  // Output: "3.1416"
```

This second example achieves the same result as the first example, but uses the `String()` function instead of the `.toString()` method.