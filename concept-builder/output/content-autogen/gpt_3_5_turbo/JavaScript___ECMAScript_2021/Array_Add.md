To add an element to an array in JavaScript using ECMAScript 2021, you can use the `push()` method or the spread operator.

Here's an example using the `push()` method:

```javascript
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

In the above code, we declared an array `arr` containing three elements and then we used the `push()` method to add the element `4` at the end of the array.

Here's an example using the spread operator:

```javascript
let arr = [1, 2, 3];
arr = [...arr, 4];
console.log(arr); // [1, 2, 3, 4]
```

In this code, we used the spread operator (`...`) to spread the elements of the original array `arr` and then added the element `4` at the end. We then assigned the updated array to the same variable `arr`.

Both methods achieve the same result of adding an element to an array. The choice between using `push()` method or spread operator depends on your individual preferences and the situation.