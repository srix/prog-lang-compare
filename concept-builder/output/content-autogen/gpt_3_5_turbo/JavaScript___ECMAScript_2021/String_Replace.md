To replace a substring within a string in JavaScript - ECMAScript 2021, we use the `replace()` method that is available on a string. It takes two arguments:

1. The first argument is the substring or a regular expression pattern that we want to replace.
2. The second argument is the replacement string that should replace the existing substring.

Here are some examples:

1. Replacing a single occurrence of a substring:

```
let str = "The quick brown fox jumps over the lazy dog";
let newStr = str.replace("brown", "red");
console.log(newStr); // The quick red fox jumps over the lazy dog
```

In the above code, we replaced the first occurrence of "brown" with "red" in the original string.

2. Replacing all occurrences of a substring using regular expression:

```
let str = "The quick brown fox jumps over the lazy brown dog";
let newStr = str.replace(/brown/g, "red");
console.log(newStr); // The quick red fox jumps over the lazy red dog
```

In the above code, we used a regular expression with the `g` flag to replace all occurrences of "brown" with "red" in the original string.

3. Replacing a substring with a callback function:

```
let str = "The quick brown fox jumps over the lazy dog";
let newStr = str.replace(/brown|lazy/g, function(match) {
  return match.toUpperCase();
});
console.log(newStr); // The quick BROWN fox jumps over the LAZY dog
```

In the above code, we used a regular expression with the `g` flag to match all occurrences of "brown" and "lazy". We passed a callback function to the `replace()` method that takes a match as an argument and returns the replacement string in uppercase.

These are just a few examples of how to replace a substring within a string in JavaScript - ECMAScript 2021. The `replace()` method is a powerful string manipulation tool and can be used in many different ways depending on the requirements of your project.