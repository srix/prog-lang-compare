In Groovy, creating a multidimensional array can be done by defining an array of arrays. Here's an example:

```groovy
def myArray = [[1,2,3],[4,5,6],[7,8,9]]
```

In this case, we've defined a 3x3 matrix. Essentially, it's an array containing three sub-arrays, each containing three integers.

To initialise the array with values, we can define each of the sub-arrays separately:

```groovy
def myArray = new int[3][3]
myArray[0] = [1,2,3]
myArray[1] = [4,5,6]
myArray[2] = [7,8,9]
```

This would produce the same 3x3 matrix as before.

Another way to initialise a multidimensional array in Groovy is to use the `fill` method:

```groovy
def myArray = new int[3][3].fill { row, col ->
   (row + 1) * (col + 1)
}
```

This will produce a 3x3 matrix where each element is the product of its row number and column number.

There are plenty of other ways to initialise and work with multidimensional arrays in Groovy, but these examples should get you started.