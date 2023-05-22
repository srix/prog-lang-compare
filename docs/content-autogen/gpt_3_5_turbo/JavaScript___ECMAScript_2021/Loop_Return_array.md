To return an array in JavaScript - ECMAScript 2021, you can simply declare and return an array from a function:

Example 1:

```JavaScript
function returnArray() {
   return [1, 2, 3, 4, 5];
}

console.log(returnArray()); // Output: [1, 2, 3, 4, 5]
```

In the above example, the function `returnArray()` returns an array `[1, 2, 3, 4, 5]`.

Example 2:

You can also use an arrow function to return an array:

```JavaScript
const returnArray = () => [1, 2, 3, 4, 5];

console.log(returnArray()); // Output: [1, 2, 3, 4, 5]
```

In the above example, the arrow function `returnArray` returns an array `[1, 2, 3, 4, 5]`.

Example 3:

You can also create an array by using the `new` keyword and the `Array()` constructor:

```JavaScript
function returnArray() {
   return new Array(1, 2, 3, 4, 5);
}

console.log(returnArray()); // Output: [1, 2, 3, 4, 5]
```

In the above example, the function `returnArray()` returns an array `[1, 2, 3, 4, 5]` created using the `Array()` constructor.

Example 4:

You can also use the spread operator (`...`) to return an array:

```JavaScript
function returnArray() {
   const arr = [1, 2, 3, 4, 5];
   return [...arr];
}

console.log(returnArray()); // Output: [1, 2, 3, 4, 5]
```

In the above example, the function `returnArray()` first creates an array `[1, 2, 3, 4, 5]`, then spreads it using the spread operator (`...`), and finally returns the spread array.