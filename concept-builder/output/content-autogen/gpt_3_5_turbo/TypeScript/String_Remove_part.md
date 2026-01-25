To remove part of a string in TypeScript, you can use the `substring()` method. This method is used to extract characters from a string between two specified positions and return the characters as a new string.

Here's an example:

```typescript
let str:string = "Hello World!";
let removedStr:string = str.substring(0, 5); // removes the first 5 characters from the string

console.log(removedStr); // output: "Hello"
```

In this example, the `substring()` method is used to remove the first 5 characters from the string and return the remaining characters as a new string `removedStr`.

You can also use the `slice()` method to remove part of a string:

```typescript
let str:string = "Hello World!";
let removedStr:string = str.slice(6); // removes the first 6 characters from the string

console.log(removedStr); // output: "World!"
```

In this example, the `slice()` method is used to remove the first 6 characters from the string `str` and return the remaining characters as a new string `removedStr`.