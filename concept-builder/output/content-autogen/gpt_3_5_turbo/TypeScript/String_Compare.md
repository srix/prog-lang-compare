In TypeScript, you can compare two strings by using the comparison operators such as `==`, `!=`, `>`, `<`, `>=`, `<=`, or by using the `localeCompare()` method.

Here are some examples:

### Using Comparison Operators
```typescript
let str1: string = "hello";
let str2: string = "world";

if (str1 == str2) {
  console.log("Strings are equal");
} else {
  console.log("Strings are not equal");
}

if (str1 > str2) {
  console.log("str1 is greater than str2");
} else {
  console.log("str2 is greater than str1");
}
```

### Using localeCompare() method
```typescript
let str1: string = "apple";
let str2: string = "banana";
let str3: string = "orange";

console.log(str1.localeCompare(str2)); // returns -1
console.log(str2.localeCompare(str3)); // returns 1
console.log(str1.localeCompare("apple")); // returns 0
```

In the `localeCompare()` method, it compares the strings based on the Unicode order and returns `-1` if the first string is less than the second string, `1` if the first string is greater than the second string, and `0` if both strings are equal.