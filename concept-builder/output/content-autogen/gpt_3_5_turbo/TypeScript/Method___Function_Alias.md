In TypeScript, an alias is a custom type which represents an existing type in the code in a more readable and concise form. It helps to reduce code duplication and improve code readability.

To create an alias in TypeScript, we use the `type` keyword followed by the alias name, an equal sign (=), and the type we want to alias. Here is an example:

```typescript
type Age = number;
type Person = {
  name: string;
  age: Age;
};
```

In this example, we have defined two aliases `Age` and `Person`. `Age` is an alias for the `number` type and `Person` is an alias for an object type with two properties: `name` of `string` type and `age` of `Age` type (which itself is an alias for `number`).

We can then use these aliases to define function parameters, interfaces, classes, and other types in our TypeScript code:

```typescript
function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const john: Person = { name: 'John', age: 25 };
printPerson(john);
```

Here, we have defined a `printPerson` function which takes a `Person` object as a parameter. We have also defined a `john` object which is of type `Person` and passed it as an argument to the `printPerson` function.

Using aliases in TypeScript makes our code more readable and easier to maintain. It provides a way to create expressive and self-documenting code.