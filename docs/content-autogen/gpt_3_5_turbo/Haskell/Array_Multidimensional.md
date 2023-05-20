In Haskell, a multidimensional array is represented as a nested list. One way to initialise a multidimensional array is to use nested list comprehension. 

For example, let's say we want to create a 2-dimensional array (matrix) of size 3x4 with some initial values. We can do this using the following code:

```
let myArray = [[x*y | y <- [1..4]] | x <- [1..3]]
```

Here, we are using list comprehension to create a list of lists. The inner list comprehension `[x * y | y <- [1..4]]` generates a list of values for a single row, where `x` is the row number. The outer list comprehension `[[x*y | y <- [1..4]] | x <- [1..3]]` generates the full matrix by applying the inner list comprehension for each row.

The resulting `myArray` will be:

```
[[1,2,3,4],[2,4,6,8],[3,6,9,12]]
```

Another example is a 3-dimensional array (a cube) of size 2x2x2 with some initial values:

```
let myArray = [[[x+y+z | z <- [1,2]] | y <- [1,2]] | x <- [1,2]]
```

Here, we are using three levels of nested list comprehension to generate the cube. The innermost comprehension `x+y+z` calculates the value for each element. The outer two comprehensions generate the rows and the layers respectively.

The resulting `myArray` will be:

```
[[[3,4],[4,5]],[[4,5],[5,6]]]
```