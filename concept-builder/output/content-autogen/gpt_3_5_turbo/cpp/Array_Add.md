Sure! To add an element to an array in C++, you can follow these steps:

1. Decide on the element you want to add and determine its value.
2. Calculate the index where you want to insert the new element.
3. Shift the other elements in the array over by one position to make room for the new element.
4. Insert the new element into the array at the desired index.

Here's an example of how to add an element "5" to an integer array "arr[]" at index 2:

```
int arr[5] = {1, 2, 3, 4, 0}; // declare and initialize the array with 5 elements; 0 is a placeholder for the new element
int index = 2; // the index where you want to add the new element
int new_element = 5; // the new element's value

// shift the other elements to make room for the new element
for(int i=4; i>index; i--) {
    arr[i] = arr[i-1]; // assign the value of the previous element to the current element
}

// insert the new element at the desired index
arr[index] = new_element;

// print the updated array
for(int i=0; i<5; i++) {
    cout << arr[i] << " ";
}
```

Output:
```
1 2 5 3 4
```

In the above example, the array initially contains the values {1, 2, 3, 4, 0}. We want to add the new element "5" at index 2, so we shift all the elements after index 2 over by one position using a for loop. This ensures that there is an empty space at index 2 to add the new element. Finally, we insert the new element at index 2 and print the updated array.