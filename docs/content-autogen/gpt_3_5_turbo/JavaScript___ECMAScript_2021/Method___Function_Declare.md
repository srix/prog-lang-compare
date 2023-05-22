In JavaScript - ECMAScript 2021, you can declare a method or function using the `function` keyword. Here's an example:

```
// Declaring a function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Invoking the function
greet('John');
```

In the example above, `greet` is the name of the function and `name` is a parameter. When the function is invoked with the `greet('John')` statement, the `name` parameter is passed the string value of `'John'`.

You can also declare a method as a property of an object using a shorthand method syntax. Here's an example:

```
// Declaring a method using shorthand method syntax
const person = {
  firstName: 'John',
  lastName: 'Doe',
  greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  }
}

// Invoking the method
person.greet();
```

In the example above, `greet` is declared as a method of the `person` object using the shorthand method syntax. A method declared in this way will automatically bind the `this` keyword to the object the method is called on.