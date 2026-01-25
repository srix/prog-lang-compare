In JavaScript - ECMAScript 2021, you can concatenate strings using the string concatenation operator `+` or the template literal syntax.

Here are examples of string concatenation using both methods:

1. Using the `+` operator:

```
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: "John Doe"
```

2. Using template literals:

```
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;

console.log(fullName); // Output: "John Doe"
```

In the second example, the `${}` syntax is used to embed variables within the string. This method provides a cleaner and more readable way of concatenating strings.