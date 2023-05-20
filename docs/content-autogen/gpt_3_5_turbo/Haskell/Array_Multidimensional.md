A multidimensional array is also called a matrix in Haskell. The easiest way to create a matrix in Haskell is by using the Data.Array module. This module provides a function called `listArray` that takes a range of indices and a list of elements as arguments to create an array.

Here's an example of creating a 2x2 matrix in Haskell:

```
import Data.Array

matrix = listArray ((0,0),(1,1)) [1,2,3,4] :: Array (Int,Int) Int
```

In this example, `listArray` takes the range of indices `((0,0),(1,1))`, which specifies a 2x2 matrix, and the list `[1,2,3,4]` as arguments. The `:: Array (Int,Int) Int` tells Haskell explicitly that the array is two-dimensional, and it contains integer values.

In this example, the matrix looks like this:

```
1  2
3  4
```

We can also create matrices with more dimensions. Here's an example of creating a 3x3x3 matrix in Haskell:

```
matrix = listArray ((0,0,0),(2,2,2)) [1..27] :: Array (Int,Int,Int) Int
```

In this example, `listArray` takes the range of indices `((0,0,0),(2,2,2))`, which specifies a 3x3x3 matrix, and the list `[1..27]` as arguments. The `:: Array (Int,Int,Int) Int` tells Haskell explicitly that the array is three-dimensional, and it contains integer values.

In this example, the matrix looks like this:

```
1   2   3     10  11  12    19  20  21
4   5   6     13  14  15    22  23  24
7   8   9     16  17  18    25  26  27
``` 

Here, each layer is a 3x3 matrix.