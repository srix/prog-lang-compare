Sure!
Arrays are a common data structure in TypeScript that allow storing multiple values in a single variable. We can create arrays in TypeScript using the following syntax:

```typescript
let myArray: <Data Type>[] = [value1, value2, value3];
```

Here's an example of creating an array of numbers:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

We can also create an array of strings like this:

```typescript
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits); // Output: ["apple", "banana", "orange"]
```

We can create an array of mixed data types as well, like this:

```typescript
let mixedArray: (string|number|boolean)[] = ["hello", 42, true];
console.log(mixedArray); // Output: ["hello", 42, true]
```

We can also create an empty array and add elements later like this:

```typescript
let emptyArray: string[] = [];
emptyArray.push("hello");
emptyArray.push("world");
console.log(emptyArray); // Output: ["hello", "world"]
```

Hope that helps!