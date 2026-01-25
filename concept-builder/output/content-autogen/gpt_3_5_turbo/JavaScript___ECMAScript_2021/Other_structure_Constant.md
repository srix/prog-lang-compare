In JavaScript, a constant is a read-only value that cannot be reassigned. Constants are declared using the `const` keyword and are block-scoped like variables declared with `let`.

Here is an example:

```
// Declare a constant
const PI = 3.14159;

// Attempt to reassign the constant (this will throw an error)
PI = 3.14; // Uncaught TypeError: Assignment to constant variable.

// Constants must be initialized at declaration
const greeting; // Uncaught SyntaxError: Missing initializer in const declaration.

// Constants are block-scoped
if (true) {
  const message = 'Hello, world!';
}
console.log(message); // Uncaught ReferenceError: message is not defined
```

In the above example, the `PI` constant is initialized with a value and cannot be reassigned later. Attempting to do so will result in a `TypeError`. The `greeting` constant however will throw a `SyntaxError` because it is not initialized at declaration.

Constants can also be used with objects and arrays. While the constant variable cannot be reassigned, the properties or elements within the objects or arrays can still be modified.

```
// Declare an object constant
const person = {
  name: 'John',
  age: 30
};

// Modify a property in the object
person.name = 'Jane';
console.log(person); // { name: 'Jane', age: 30 }

// Declare an array constant
const numbers = [1, 2, 3];

// Modify an element in the array
numbers[0] = 4;
console.log(numbers); // [4, 2, 3]
```

In the above example, the `person` and `numbers` constants are object and array types respectively. While the variables themselves are immutable, the properties and elements can still be modified.