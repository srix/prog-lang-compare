A multidimensional array is an array of arrays. You can create a multidimensional array in JavaScript by defining an array that contains one or more arrays as its elements.

To create a multidimensional array and initialize it in JavaScript, you can follow these steps:

1. Define an array and assign it to a variable.

```
let myArray = [];
```

2. Add arrays to the main array as elements. These will be the sub-arrays that create the multidimensional array.

```
myArray[0] = [1, 2, 3];
myArray[1] = [4, 5, 6];
```

3. You can also define the sub-arrays separately, and then assign them to the main array.

```
let subArray1 = [1, 2, 3];
let subArray2 = [4, 5, 6];
let myArray = [subArray1, subArray2];
```

Here's an example of how to create and initialize a 3-dimensional array:

```
let my3DArray = [
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [
    [7, 8, 9],
    [10, 11, 12]
  ]
];
```

In this example, `my3DArray` is an array of two arrays, each of which contains two sub-arrays. Each of these sub-arrays contains three elements.

You can access individual elements in a multidimensional array using the index notation. For example, to access the value at index (0,1,2) in the above 3-dimensional array, you would use:

```
console.log(my3DArray[0][1][2]); // Output: 6
```