To get the size of an array in JavaScript - ECMAScript 2021, you can use the `length` property of the array. This property returns the number of elements in the array.

Here's an example:

```
const myArray = [1, 2, 3, 4, 5];
console.log(myArray.length); // Output: 5
```

In this example, we define an array named `myArray` with five elements. We then use the `length` property to get the size of the array, which is equal to 5.

Another example:

```
const myOtherArray = ['apple', 'banana', 'orange'];
console.log(myOtherArray.length); // Output: 3
```

In this example, we define an array named `myOtherArray` with three elements. We then use the `length` property to get the size of the array, which is equal to 3.

Note that the `length` property returns 0 for an empty array, like this:

```
const emptyArray = [];
console.log(emptyArray.length); // Output: 0
```