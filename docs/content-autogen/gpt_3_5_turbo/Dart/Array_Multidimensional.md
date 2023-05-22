In Dart, you can create a multidimensional array (an array of arrays) by nesting one or more arrays within an array. Here's an example of a two-dimensional array:

```
List<List<int>> myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

In this example, `myArray` is a two-dimensional array of integers. The outer `List<List<int>>` specifies that `myArray` is a list of lists (i.e., two-dimensional), and that each element of the outer list is itself a list of integers.

To access an element of the array, you can use square brackets. For example, `myArray[1][2]` would give you the value `6`, since it refers to the third element (index 2) of the second inner array (index 1).

To initialise a multidimensional array, you can use a nested loop. Here's an example that creates a three-dimensional array of integers with dimensions 2x3x4:

```
List<List<List<int>>> myArray = List.generate(
  2,
  (i) => List.generate(
    3,
    (j) => List.generate(
      4,
      (k) => i + j + k,
    ),
  ),
);
```

In this example, we use the `List.generate()` method to create each level of the array. The outer level has size 2, the middle level has size 3, and the inner level has size 4. We use the loop variables `i`, `j`, and `k` to calculate the value of each element based on its indices.

To access an element of this array, you would need to use three sets of square brackets, like `myArray[1][2][3]`. This would give you the value `6`, since it refers to the fourth element (index 3) of the third inner array (index 2) of the second outer array (index 1).