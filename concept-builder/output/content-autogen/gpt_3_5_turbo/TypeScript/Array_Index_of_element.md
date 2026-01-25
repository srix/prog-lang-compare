In TypeScript, you can get the index of an element in an array using the `indexOf()` method. Here is an example:

```typescript
const myArray: string[] = ["apple", "banana", "orange"];
const index = myArray.indexOf("banana");

console.log(index); // Output: 1
```

In this example, we declare an array called `myArray` and assign it three string values. We then use the `indexOf()` method to find the index of the string "banana" in the array. The `indexOf()` method returns the index of the element if it exists in the array, or -1 if it doesn't.

You can also use the `findIndex()` method to find the index of an element that matches a condition. Here is an example:

```typescript
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const index = people.findIndex(person => person.name === "Bob");

console.log(index); // Output: 1
```

In this example, we declare an array of objects representing people. We then use the `findIndex()` method to find the index of a person object that has a `name` property equal to "Bob". The `findIndex()` method takes a callback function that returns `true` if the condition is met, and returns the index of the first element that meets the condition. If no elements meet the condition, it returns -1.