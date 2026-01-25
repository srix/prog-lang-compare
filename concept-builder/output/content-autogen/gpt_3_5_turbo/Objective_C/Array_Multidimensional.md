In Objective-C, a multidimensional array is typically defined as an array of arrays. Here is an example of how to create a 2-dimensional array and initialize it:

```
// Create a 2-dimensional array with 3 rows and 4 columns
int myArray[3][4];

// Initialize the array with values
myArray[0][0] = 1;
myArray[0][1] = 2;
myArray[0][2] = 3;
myArray[0][3] = 4;
myArray[1][0] = 5;
myArray[1][1] = 6;
myArray[1][2] = 7;
myArray[1][3] = 8;
myArray[2][0] = 9;
myArray[2][1] = 10;
myArray[2][2] = 11;
myArray[2][3] = 12;
```

Alternatively, you can also initialize a multidimensional array using nested loops like this:

```
// Create a 2-dimensional array with 3 rows and 4 columns
int myArray[3][4];

// Initialize the array with nested loops
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        myArray[i][j] = i * 4 + j + 1;
    }
}
```

This will initialize the array with values from 1 to 12, with each row representing a different set of values.