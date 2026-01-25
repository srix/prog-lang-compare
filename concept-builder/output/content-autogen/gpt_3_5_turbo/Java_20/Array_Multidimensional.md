A multidimensional array is an array of arrays, where each array member can also be an array. In Java, multidimensional arrays are typically created using the following syntax:

```java
datatype[][] arrayName = new datatype[row][column];
```

Here, the `datatype` refers to the data type of the elements in the array. The `row` and `column` variables initialize the size of the array. Here is an example of creating a two-dimensional array of integers and initializing it:

```java
int[][] arr = new int[3][4];
arr[0][0] = 1;
arr[0][1] = 2;
arr[0][2] = 3;
arr[0][3] = 4;
arr[1][0] = 5;
arr[1][1] = 6;
arr[1][2] = 7;
arr[1][3] = 8;
arr[2][0] = 9;
arr[2][1] = 10;
arr[2][2] = 11;
arr[2][3] = 12;
```

Here, we create a 3x4 array named `arr` and then initialize each element in the array. Another way to initialize the same array is as follows:

```java
int[][] arr = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
```

Here, we create a 3x4 array named `arr` and initialize each element using curly braces. The first set of braces contains the first row, the second set contains the second row, and so on.