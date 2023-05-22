To replace a substring within a string in TypeScript, you can use the `replace()` method. The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement.

Here is an example of how to replace a substring within a string in TypeScript:

```typescript
let myString: string = "Hello World";
let newString: string = myString.replace("World", "Universe");

console.log(newString);  // Output: "Hello Universe"
```

In the above example, we have replaced the substring "World" in the `myString` variable with the substring "Universe" using the `replace()` method, and stored the result in the `newString` variable.

You can also use a regular expression to replace substrings within a string. Here is an example:

```typescript
let myString: string = "Hello World 1, World 2, World 3";
let newString: string = myString.replace(/World/g, "Universe");

console.log(newString);  // Output: "Hello Universe 1, Universe 2, Universe 3"
```

In this example, we have replaced all occurrences of "World" in the `myString` variable with "Universe" using a regular expression with the 'g' flag, which matches all occurrences of the pattern rather than just the first one.