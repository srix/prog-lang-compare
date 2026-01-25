To convert an integer to a float in TypeScript, you can simply use the Number() function. Here are some examples:

```
// Converting an integer to a float using Number()
let intNum = 5;
let floatNum = Number(intNum);
console.log(floatNum); // Output: 5.0

// Using Number() to convert a string that contains an integer to a float
let strNum = "10";
let floatFromStr = Number(strNum);
console.log(floatFromStr); // Output: 10.0
```

In both cases, the Number() function is used to convert the integer value to a floating-point number. The result is assigned to a new variable of type float, which can then be used in subsequent calculations or operations that require a floating-point value.