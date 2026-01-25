In TypeScript, a hash is commonly known as an object and can be created using the object literal syntax. 

Here's an example of how to create a hash in TypeScript: 

```typescript
// Creating a hash with string keys and number values
const myHash: { [key: string]: number } = {
  "a": 1,
  "b": 2,
  "c": 3
};
```

In the above example, the hash has string keys "a", "b", and "c" with corresponding numerical values 1, 2, and 3.

Here's another example of how to create a hash with a more complex data type:

```typescript
// Creating a hash with string keys and object values
type Person = {
  name: string;
  age: number;
};

const people: { [key: string]: Person } = {
  "Alice": {name: "Alice", age: 25},
  "Bob": {name: "Bob", age: 30},
  "Charlie": {name: "Charlie", age: 35}
};
```

In this example, the hash has string keys representing the names of people, with values being objects containing their name and age. 

Note that in both examples, we use the `[key: string]:` notation to indicate that the keys of the hash are strings. We also specify the value type, which can be any data type such as numbers, strings, booleans, objects, or even other arrays or hashes.