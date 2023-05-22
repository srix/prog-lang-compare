To get the value of a key in a hash (also called an object or dictionary) in TypeScript, you can use the dot notation or bracket notation.

Using the dot notation:

```typescript
const myObject = { name: "John", age: 30 };
const name = myObject.name; // "John"
const age = myObject.age; // 30
```

Using the bracket notation:

```typescript
const myObject = { name: "John", age: 30 };
const name = myObject["name"]; // "John"
const age = myObject["age"]; // 30
```

Note that the bracket notation allows you to use a variable as the key:

```typescript
const myObject = { name: "John", age: 30 };
const key = "name";
const name = myObject[key]; // "John"
```