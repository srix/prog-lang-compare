In TypeScript, you can create an array with different types by declaring the array as a union of the different types you want the array to hold. Here are a few examples:

1. An array of strings and numbers:

```
let myArray: (string | number)[] = ["hello", 42, "world", 99];
```

2. An array of booleans and objects:

```
let myArray: (boolean | object)[] = [true, { name: "John" }, false, { age: 25 }];
```

3. An array of strings, numbers, and booleans:

```
let myArray: (string | number | boolean)[] = ["hello", 42, true, "world", false, 99];
```

Note that the vertical bar (`|`) indicates a union type, which allows for multiple types to be declared for a variable or array.