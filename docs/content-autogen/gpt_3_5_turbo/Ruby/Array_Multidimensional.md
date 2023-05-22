A multidimensional array in Ruby is an array of arrays. It can have any number of dimensions. Here's an example of how to create a 2-dimensional array and initialize it with values:

```ruby
# Create and initialize a 2-dimensional array
arr = [[1, 2, 3], [4, 5, 6]]

# Access values in the array
puts arr[0][1]  # Output: 2
puts arr[1][0]  # Output: 4
```

In the example above, we created a 2-dimensional array with two rows and three columns. The first row contains the values 1, 2, and 3, and the second row contains the values 4, 5, and 6. We can access the values in the array using the square bracket notation.

Here's another example of how to create a 3-dimensional array and initialize it with values:

```ruby
# Create and initialize a 3-dimensional array
arr = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]]
]

# Access values in the array
puts arr[0][1][0]  # Output: 3
puts arr[1][0][1]  # Output: 6
```

This example creates a 3-dimensional array with two "layers", each of which contains two "rows" of arrays with two values each. We can access the values in the array using the square bracket notation with three indices: one for the layer, one for the row, and one for the column.