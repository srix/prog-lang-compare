In TypeScript, comments can be used to add documentation or notes within the code. There are two types of comments in TypeScript - single-line comments and multi-line comments.

Single-line comments start with two forward slashes `//` and can only span one line. An example of a single-line comment is:

```typescript
// This is a comment
```

Multi-line comments, on the other hand, can span multiple lines and start with `/*` and end with `*/`. An example of a multi-line comment is:

```typescript
/*
This is a multi-line comment.
This comment can span multiple lines.
*/
```

In addition to these two types of comments, there is also a special type of comment called a JSDoc comment. JSDoc comments allow you to add rich documentation to your code and have a specific format to adhere to. An example of a JSDoc comment is:

```typescript
/**
 * This is a JSDoc comment. It starts with /** and ends with */
 * It can span multiple lines and provide detailed documentation about a function or variable.
 * @param {string} name - The name of a person
 * @returns {string} The greeting including the person's name
 */
function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

JSDoc comments provide a way for TypeScript to provide better code completion suggestions based on the type of the parameter and the expected return value.