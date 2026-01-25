In JavaScript, you can split a string using the `split()` method which returns an array of substrings.

The syntax for using the `split()` method is as follows:

```
string.split(separator, limit);
```

Here, `separator` is the character or regular expression that is used to divide the string into substrings. If the separator is an empty string or null, the string will be split into an array of characters. `limit` is an optional parameter that specifies the maximum number of splits to be made.

Some examples of splitting a string in JavaScript are as follows:

1. Splitting a string into an array of words:

```
const sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(" ");
console.log(words);
// Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
```

2. Splitting a string into an array of characters:

```
const str = "Hello World";
const chars = str.split("");
console.log(chars);
// Output: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
```

3. Splitting a string into an array of substrings based on a delimiter:

```
const str = "apple,orange,banana,mango";
const fruits = str.split(",");
console.log(fruits);
// Output: ["apple", "orange", "banana", "mango"]
```

4. Splitting a string into an array of substrings and limiting the number of splits:

```
const str = "apple,orange,banana,mango";
const fruits = str.split(",", 2);
console.log(fruits);
// Output: ["apple", "orange"]
```