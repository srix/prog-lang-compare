To delete an element from an array in Java, follow these steps:

1. Find the index of the element to be deleted.
2. Shift all the elements after the deleted element one index to the left.
3. Resize the array to dispose of the last element.

Here's an example code:

```
// Creating an array with size 5
int[] arr = {1, 2, 3, 4, 5};

// Index of the element to be deleted
int index = 2;

// Shifting elements
for (int i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}

// Resizing the array
int[] newArr = new int[arr.length - 1];
System.arraycopy(arr, 0, newArr, 0, arr.length - 1);

// Printing the new array
for (int i = 0; i < newArr.length; i++) {
    System.out.println(newArr[i]);
}
```

In this example, we are deleting the element with index 2 (i.e., the third element: 3). We shift all the elements after the deleted element one index to the left. Then, we create a new array with size 4 (one less than the original array), and copy all the elements from the original array to the new array, except the last element (which was shifted left). Finally, we print the new array.

The output will be:

```
1
2
4
5
```