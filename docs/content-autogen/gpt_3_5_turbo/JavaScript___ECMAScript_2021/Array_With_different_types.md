In JavaScript ECMAScript 2021, we can create an array with different types using the `Array` constructor or using array literal syntax. Here are some examples.

Using the `Array` constructor:

```javascript
const mixedArray = new Array(true, 25, "foo", {name: "John Doe"}); // creates an array with boolean, number, string and object types
console.log(mixedArray); // output: [true, 25, "foo", {name: "John Doe"}]
```

Using array literal syntax:

```javascript
const mixedArray = [true, 25, "foo", {name: "John Doe"}]; // creates an array with boolean, number, string and object types
console.log(mixedArray); // output: [true, 25, "foo", {name: "John Doe"}]
```

In the above examples, the array contains four elements of Boolean, Number, String and Object types. Both ways work in creating an array of different types, but the array literal syntax is much shorter and readable. The key point is to put the values of different types together in one array.