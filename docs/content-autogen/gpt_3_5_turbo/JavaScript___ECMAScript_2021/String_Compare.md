In JavaScript - ECMAScript 2021, there are two ways to compare strings: 

1. Using the "===" operator, which performs a strict comparison of the values and data types. It returns "true" if both values are equal in type and value, and "false" otherwise. For example:

```
const string1 = "hello";
const string2 = "hello";

console.log(string1 === string2); // true

const string3 = "hello";
const string4 = "HELLO";

console.log(string3 === string4); // false
```
2. Using the "localeCompare()" method, which compares two strings and returns a number based on their alphabetical order. If the first string is ordered before the second string, a negative number is returned. If the second string is ordered before the first string, a positive number is returned. If the two strings have the same alphabetical order, "0" is returned. For example:

```
const string1 = "apple";
const string2 = "banana";

console.log(string1.localeCompare(string2)); // -1

const string3 = "orange";
const string4 = "grapefruit";

console.log(string3.localeCompare(string4)); // 1

const string5 = "pear";
const string6 = "pear";

console.log(string5.localeCompare(string6)); // 0
```

Remember that when comparing strings, it is important to pay attention to the capitalization and to ensure that both strings have the same data type (i.e., both are either strings or numbers).