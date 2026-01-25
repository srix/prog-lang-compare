To create a string in JavaScript - ECMAScript 2021, you simply need to enclose your text within single or double quotes. Here's an example:

```javascript
let myString = "Hello, World!";
```

In the above example, the `myString` variable has been assigned the value of "Hello, World!" enclosed within double quotes.

Another example with single quotes:

```javascript
let myString = 'This is a string';
```

You can also use backticks (`) for creating strings called "template literals" that support multi-line strings and string interpolation. Here's an example:

```javascript
let name = 'John';
let age = 25;
let myString = `My name is ${name} and I am ${age} years old`;
```

In the above example, the `myString` variable is assigned a string that uses string interpolation to include the variables `name` and `age`. When we use backticks, we can freely add `new lines` without specifying an escape sequence.