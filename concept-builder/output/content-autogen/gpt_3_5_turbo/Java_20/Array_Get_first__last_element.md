In Java 20, you can get the first and last element of an array using the following code:

```
int[] arr = {1, 2, 3, 4, 5}; // Example integer array

// Getting the first element
int firstElement = arr[0]; 

// Getting the last element
int lastElement = arr[arr.length-1];
```

Explanation:

1. The `arr` variable is an example integer array containing 5 elements.

2. To get the first element, you can simply access the 0th index of the array.

3. To get the last element, you need to use the `length` property of the array, subtract 1 (since arrays are 0-based), and access the resulting index.

**Note:** This method works for arrays of any data type, not just integers. Just replace `int` with the correct data type in the code.