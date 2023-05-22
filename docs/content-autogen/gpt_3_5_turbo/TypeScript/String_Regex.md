Regex (short for regular expression) is a pattern-matching language that can help you search and manipulate text. In TypeScript, you can use regular expressions with the `RegExp` class, which provides methods for searching and replacing strings.

Here are a few examples of how to use regex in TypeScript:

1. Searching for a pattern in a string:

To search for a pattern in a string, you can use the `test()` method of the `RegExp` class. The `test()` method returns `true` if the pattern is found in the string and `false` otherwise.

```typescript
const regex = /hello/;
const testString = "hello world";

console.log(regex.test(testString)); // true
```

2. Extracting matches from a string:

To extract the matches from a string, you can use the `exec()` method of the `RegExp` class. The `exec()` method returns an array containing information about the match, such as the matched text and the index where the match starts.

```typescript
const regex = /hello/;
const testString = "hello world";

const result = regex.exec(testString);

console.log(result[0]); // "hello"
console.log(result.index); // 0
```

3. Replacing matches with a new string:

To replace the matches in a string with a new string, you can use the `replace()` method of the `string` class. The `replace()` method takes a regex pattern and a replacement string as arguments, and replaces all instances of the pattern in the string with the replacement string.

```typescript
const regex = /hello/;
const testString = "hello world";

const newString = testString.replace(regex, "hi");

console.log(newString); // "hi world"
```

These are just a few examples of what you can do with regex in TypeScript. Regular expressions are a powerful tool for working with text, and can be used in many different ways depending on your specific needs.