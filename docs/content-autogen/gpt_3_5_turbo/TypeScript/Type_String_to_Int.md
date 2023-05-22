To convert a string to an integer in TypeScript, you can use the `parseInt()` function. This function takes the string as its argument and returns an integer. 

Here is an example:

```typescript
let numStr: string = "42";
let num: number = parseInt(numStr);

console.log(num); // Outputs 42
```

If the string cannot be converted to an integer, `parseInt()` will return `NaN`. Here is an example:

```typescript
let invalidStr: string = "Hello World";
let num: number = parseInt(invalidStr);

console.log(num); // Outputs NaN
```

It is also possible to convert a hexadecimal string to an integer using `parseInt()`. In this case, you need to pass an additional argument to `parseInt()` to specify the base (16 for hexadecimal). Here is an example:

```typescript
let hexStr: string = "FF";
let num: number = parseInt(hexStr, 16);

console.log(num); // Outputs 255
```

Note that if you pass an invalid string or an invalid base argument to `parseInt()`, the function will also return `NaN`.