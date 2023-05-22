In JavaScript, we can use the `trim()` method to remove leading and trailing whitespaces from a string. This method is available in ECMAScript 5 and above. 

Syntax: `string.trim()`

Example:

```javascript
let str = "   Hello, World!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, World!"
```

In the above example, the `trim()` method removes the leading and trailing whitespaces from the string `str`, and the resulting trimmed string is stored in the variable `trimmedStr`. The final output shows the trimmed string without any leading or trailing whitespaces.

We can also chain the `trim()` method with other string methods to perform various operations on a trimmed string. 

Example: 

```javascript
let str = "   Hello, World!   ";
let reversedStr = str.trim().split("").reverse().join("");
console.log(reversedStr); // Output: "!dlroW ,olleH"
```

In this example, the `trim()` method is combined with the `split()`, `reverse()`, and `join()` methods to create a new string that is the reverse of the trimmed string. The final output shows the reversed string without any leading or trailing whitespaces.