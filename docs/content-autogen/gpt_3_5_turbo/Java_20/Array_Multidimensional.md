A multidimensional array is an array of arrays in Java. In Java, a two-dimensional array is the simplest form of multidimensional array. Here's an example of how to create a 2D array of size 5x5:

```java
int[][] grid = new int[5][5];
```

This creates a 2D array of integers with 5 rows and 5 columns.

We can also initialize the elements of this array at the time of its creation:

```java
int[][] grid = {{1,2,3,4,5}, {6,7,8,9,10}, {11,12,13,14,15}, {16,17,18,19,20}, {21,22,23,24,25}};
```

This initializes a 2D array of integers with the elements {1,2,3,4,5} in row 1, {6,7,8,9,10} in row 2, and so on.

We can also create 3D arrays in a similar way. Here's an example of how to create a 3D array of size 3x3x3:

```java
int[][][] cube = new int[3][3][3];
```

This creates a 3D array of integers with 3 "layers", each layer with 3 rows and 3 columns.

Similarly, we can also initialize the elements of a 3D array at the time of its creation:

```java
int[][][] cube = {{{1,2,3}, {4,5,6}, {7,8,9}}, {{10,11,12}, {13,14,15}, {16,17,18}}, {{19,20,21}, {22,23,24}, {25,26,27}}};
```

This initializes a 3D array of integers with the elements {1,2,3} in row 1 of layer 1, {4,5,6} in row 2 of layer 1, and so on.