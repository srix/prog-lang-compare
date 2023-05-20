In Python, a multidimensional array is simply an array of arrays. You can create a multidimensional array by defining an array and setting each element of the array to be a new array. Here's an example to create a 2D array with 3 rows and 4 columns:

```python
# Create a multidimensional array with 3 rows and 4 columns
my_array = [[0 for j in range(4)] for i in range(3)]
print(my_array)
```

Output:
```python
[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```

In this example, we created a 2D array with 3 rows and 4 columns. We used a nested for loop to set each element of the array to be a new array with 4 elements, initialised to 0.

Here's another example to create a 3D array with dimensions 2x3x4:

```python
# Create a 3D array with dimensions 2x3x4
my_3d_array = [[[0 for k in range(4)] for j in range(3)] for i in range(2)]
print(my_3d_array)
```

Output:
```python
[[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]]
```

In this example, we created a 3D array with dimensions 2x3x4. We used three nested for loops to set each element of the array to be a new array with 4 elements, initialised to 0. We repeated this for each row, and then repeated this entire process for each "layer" of the 3D array.