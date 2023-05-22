Destructuring assignment is a feature in TypeScript that allows you to extract values from objects and arrays and assign them to variables using a shorter syntax.

To use destructuring assignment, you can simply wrap the variables you want to assign values to in curly braces `{ }`, and then assign the object or array you want to extract values from to the left-hand side of the expression.

Here are a few examples:

1. Destructuring an object:

```
interface Person {
  name: string;
  age: number;
  city: string;
}

const person: Person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age } = person;

console.log(name); // Outputs 'John'
console.log(age); // Outputs 30
```

2. Destructuring an array:

```
const numbers: number[] = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Outputs 1
console.log(second); // Outputs 2
console.log(rest); // Outputs [3, 4, 5]
```

3. Destructuring nested objects:

```
interface Person {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
  };
}

const person: Person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  }
};

const { name, address: { city } } = person;

console.log(name); // Outputs 'John'
console.log(city); // Outputs 'New York'
```

In these examples, we are using destructuring assignment to extract values from objects and arrays and assign them to variables. Destructuring can be a powerful tool for making your code simpler and more concise, especially when working with complex data structures.