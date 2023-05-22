To delete an element from an array in TypeScript, you can use the `splice()` method. This method takes two parameters: the index at which to start deleting elements, and the number of elements to delete. You can then use `console.log()` to verify that the element has been deleted.

Here's an example code snippet:

```
let arr: number[] = [10, 20, 30, 40, 50];
console.log("Array before deletion: " + arr);

// Deleting element at index 2
arr.splice(2, 1);
console.log("Array after deletion: " + arr);
```

In this example, we have an array `arr` with 5 elements. We want to delete the element at index 2 (which is the value `30`). We use the `splice()` method to delete this element, and then print the resulting array to the console to confirm that the element has been deleted.

The output of this code snippet will be:

```
Array before deletion: 10,20,30,40,50
Array after deletion: 10,20,40,50
```

As you can see, the element with value `30` has been successfully deleted from the array.