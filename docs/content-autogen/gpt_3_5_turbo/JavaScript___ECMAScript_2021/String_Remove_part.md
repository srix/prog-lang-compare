In JavaScript - ECMAScript 2021, to remove a part of a string, we can use the `substring()` or the `slice()` methods. These methods return a new string with the specified portion removed.

Here are some examples:

1. Using `substring()`
```
let str = "Hello, World!";
let newStr = str.substring(7); // Removes the first 7 characters
console.log(newStr); // Output: World!

newStr = str.substring(0, 5); // Removes characters from index 0 to index 4
console.log(newStr); // Output: Hello
```

2. Using `slice()`
```
let str = "Hello, World!";
let newStr = str.slice(7); // Removes the first 7 characters
console.log(newStr); // Output: World!

newStr = str.slice(0, 5); // Removes characters from index 0 to index 4
console.log(newStr); // Output: Hello
```

Both methods can also accept negative indices to remove characters from the end of the string.
```
let str = "Hello, World!";
let newStr = str.substring(-6); // Starts from index 0 as negative indices are treated as 0
console.log(newStr); // Output: Hello, World!

newStr = str.slice(-6); // Removes last 6 characters
console.log(newStr); // Output: World!
```