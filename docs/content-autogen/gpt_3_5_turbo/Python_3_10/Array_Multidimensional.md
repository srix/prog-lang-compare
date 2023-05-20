A multidimensional array is an array that contains one or more arrays as its elements. In Python, we can create a multidimensional array using a nested list. Here is an example of how to create a 2D array or matrix:

```
# Creating a 2D array
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

We can access the elements of the 2D array using the row and column index. For example, to access the element at row 0 and column 1, we can use the following syntax:

```
# Accessing an element in a 2D array
matrix[0][1]  # Output: 2
```

Similarly, we can create a 3D array or cube by nesting another set of square brackets inside the first set of square brackets:

```
# Creating a 3D array
cube = [
    [[1, 2, 3], [4, 5, 6]],
    [[7, 8, 9], [10, 11, 12]]
]

# Accessing an element in a 3D array
cube[1][0][2]  # Output: 9
```

In this example, we have created a 3D array that contains two 2D arrays. We can access the elements of the 3D array using the row, column, and depth index. 

This is a basic introduction to creating and accessing multidimensional arrays in Python. There are other techniques and libraries available for working with multidimensional arrays in Python, such as NumPy, which provides a powerful array object that is optimized for numerical operations.