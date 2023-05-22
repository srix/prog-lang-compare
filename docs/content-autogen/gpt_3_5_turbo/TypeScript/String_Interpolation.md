In TypeScript, you can use string interpolation to embed expressions inside of string literals. To do this, you use backticks (\`) instead of single or double quotes, and then wrap your expression in curly braces (\{\}).

Here is an example of string interpolation in TypeScript:

```
let name = "John";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);
```

This will output: "My name is John and I am 30 years old."

In the example above, we used backticks to create a string literal that includes two expressions: the `name` variable and the `age` variable. We wrapped each expression in curly braces and used the `${}` syntax to interpolate it into the string.

You can also use string interpolation to concatenate strings and expressions:

```
let firstName = "John";
let lastName = "Doe";
console.log(`My full name is ${firstName} ${lastName}.`);
```

This will output: "My full name is John Doe."

In this example, we concatenated the `firstName` and `lastName` variables using string interpolation. We used the `${}` syntax to interpolate the expressions into the string, and added a space between them to create a full name.