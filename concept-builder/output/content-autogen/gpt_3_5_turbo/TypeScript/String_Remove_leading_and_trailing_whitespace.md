Sure, here's how you can remove leading and trailing whitespaces from a string in TypeScript:

```
let str: string = "   This is a string with leading and trailing whitespaces   ";

// Removing leading whitespaces
str = str.replace(/^\s+/, '');

// Removing trailing whitespaces
str = str.replace(/\s+$/, '');

console.log(str); // "This is a string with leading and trailing whitespaces"
```

In the code above, we first declare a string variable `str` that contains leading and trailing whitespaces.

To remove the leading whitespaces, we use the `replace()` method with a regular expression (`/^\s+/`). Here, `^` matches the beginning of the string, `\s` matches any whitespace character, and `+` matches one or more occurrences of whitespace. We replace this pattern with an empty string `''`, effectively removing all leading whitespaces from the string.

Similarly, we remove the trailing whitespaces by using the `replace()` method with another regular expression (`/\s+$/`). Here, `$` matches the end of the string, and we replace all trailing whitespaces with an empty string `''`.

Finally, we log the modified string to the console.

Hope this helps! Let me know if you have any questions.