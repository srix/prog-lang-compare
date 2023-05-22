In JavaScript, we can define default values for function arguments using the assignment operator, `=`. This means that if the argument is not provided when the function is called, the default value will be used instead.

Here's an example of a function that takes two arguments, `name` and `age`, with `age` having a default value of `18`:

```javascript
function greet(name, age = 18) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet("John"); // Output: Hello John, you are 18 years old.
greet("Jane", 25); // Output: Hello Jane, you are 25 years old.
```

As you can see, when `greet` is called with only one argument (`name`), the default value `18` is used for `age`.

Here's another example where we define a function that adds two numbers but uses a default value of `0` if the second argument is not provided:

```javascript
function addNumbers(a, b = 0) {
  return a + b;
}

console.log(addNumbers(4, 5)); // Output: 9
console.log(addNumbers(4)); // Output: 4 (using default value of 0 for b)
```

In summary, by using default values for function arguments in JavaScript, we can provide a more flexible and convenient interface for our functions while ensuring that they still work correctly when some arguments are not provided.