In JavaScript - ECMAScript 2021, you can delete an element from an array using the `splice()` method. The `splice()` method allows you to remove a specified number of elements starting from a given index position.

Here's how you can delete an element by its index position using `splice()` method in JavaScript - ECMAScript 2021:

```javascript
let arr = ['apple', 'banana', 'orange', 'mango'];

// delete the second element (banana) from the array
arr.splice(1, 1);

console.log(arr); // Output: ['apple', 'orange', 'mango']
```

In the above example, `splice(1, 1)` is used to remove one element starting from the index position 1, which deletes the second element 'banana' from the array.

You can also delete multiple elements from an array using the `splice()` method:

```javascript
let arr = ['apple', 'banana', 'orange', 'mango'];

// delete two elements starting from index position 1
arr.splice(1, 2);

console.log(arr); // Output: ['apple', 'mango']
```

In the above example, `splice(1, 2)` is used to remove two elements starting from the index position 1, which deletes 'banana' and 'orange' from the array.