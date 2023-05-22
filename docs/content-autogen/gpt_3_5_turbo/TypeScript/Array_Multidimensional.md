To create a multidimensional array in TypeScript, we first declare the data type of the array elements and then declare the array with its dimensions. Here is an example of a two-dimensional array of strings:

```
let myArray: string[][] = [
  ["apple", "banana", "orange"],
  ["cat", "dog", "fish"]
];
```

In this example, we have declared the variable `myArray` to be a two-dimensional array of strings using the syntax `string[][]`. We have also initialized it with two arrays of strings, each array representing a row in the resulting two-dimensional array.

If we wanted to create a three-dimensional array, we would simply add another set of brackets to the type declaration and initialize it with three nested arrays, like this:

```
let myArray3d: string[][][] = [
  [
    ["apple", "banana"],
    ["carrot", "broccoli"]
  ],
  [
    ["cat", "dog"],
    ["bird", "fish"]
  ]
];
```

In this three-dimensional array example, we have declared the variable `myArray3d` to be a three-dimensional array of strings using the syntax `string[][][]`. We have initialized it with two arrays of two-dimensional arrays of strings, with each 2D array representing a page of a 3D book.