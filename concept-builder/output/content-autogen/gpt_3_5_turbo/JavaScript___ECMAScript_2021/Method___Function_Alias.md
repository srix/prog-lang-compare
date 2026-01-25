In JavaScript, an alias is a reference to a variable that has been assigned a different name. It allows developers to create shorter, more convenient names for variables, functions, or properties.

Here is an example of how to use alias in JavaScript - ECMAScript 2021:

```javascript
// Create a variable called fullName
let fullName = 'John Doe';

// Create an alias for fullName
const name = fullName;

// Print the value of the alias
console.log(name);    // Output: John Doe

// Update the value of the original variable
fullName = 'Jane Doe';

// The value of the alias remains the same
console.log(name);    // Output: John Doe
```

In this example, we created a variable called `fullName` and assigned it the value "John Doe". We then created an alias for the `fullName` variable using the `const` keyword and assigned it the name `name`. We printed the value of the alias using `console.log()`, which printed "John Doe". We then updated the value of the `fullName` variable to "Jane Doe", but the value of the alias `name` remained the same when printed again using `console.log()`. 

Using an alias can be particularly useful when dealing with long variable names or when a shorter name is more descriptive or easier to read. For example, instead of typing `document.querySelector()` repeatedly to select an element in the DOM, you could create an alias `const $ = document.querySelector` and use it instead like `$('.element-class')`.