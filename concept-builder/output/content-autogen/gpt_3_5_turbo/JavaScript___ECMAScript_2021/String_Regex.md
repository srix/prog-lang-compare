Regex (Regular Expressions) in JavaScript are used to match patterns in strings. The syntax for regex in JavaScript generally follows the syntax of other programming languages, but it can vary slightly. Here is an example of how to use regex in JavaScript:

To create a regular expression, you can use the `RegExp` constructor or a regex literal. A regex literal is enclosed in forward slashes `/regex/` and the `RegExp` constructor requires a string argument that specifies the regex pattern.

```javascript
const regex1 = /cat/; // regex literal
const regex2 = new RegExp("dog"); // RegExp constructor
```

Once you have created a regex, you can use it with various methods (such as `test()` and `match()`) available on the `String` prototype to determine whether a string matches the regex pattern.

```javascript
const str = "The cat chased the dog";
console.log(regex1.test(str)); // true
console.log(regex2.test(str)); // false
```

In the above example, `test()` method returns `true` for `regex1` because the word "cat" is present in the string, but returns `false` for `regex2` because the word "dog" is not present in the string.

You can use various characters to build more complex regex patterns. Some of the most commonly used characters in JavaScript regex are:

- `.` : Matches any character except newline
- `^` : Matches the beginning of the string
- `$` : Matches the end of the string
- `*` : Matches zero or more occurrences of the preceding character
- `+` : Matches one or more occurrences of the preceding character
- `?` : Matches zero or one occurrence of the preceding character
- `\`: Used to escape special characters and treat them as literals

For example, the pattern `/c.t/` will match a string that has any character between "c" and "t", such as "cat", "cot", or "cut". And the pattern `/^The/` will match any string that starts with "The".

```javascript
const regex3 = /c.t/;
console.log(regex3.test(str)); // true

const regex4 = /^The/;
console.log(regex4.test(str)); // true
```

In addition, you can use parentheses to group parts of a regex, use square brackets to match any one of a set of characters, and the vertical bar `|` to specify alternatives. Here is an example:

```javascript
const str2 = "The bicycle is green";
const regex5 = /(bike|bicycle)/;
console.log(regex5.test(str2)); // true

const regex6 = /[aeiou]/;
console.log(regex6.test(str2)); // true
```

In the above example, the pattern `/(bike|bicycle)/` matches either "bike" or "bicycle". The pattern `/[aeiou]/` matches any vowel in the string. 

These are just some examples of how to use regex in JavaScript. For more information and more complex patterns, you can refer to the documentation for regular expressions in JavaScript.