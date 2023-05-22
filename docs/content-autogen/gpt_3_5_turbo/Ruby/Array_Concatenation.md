In Ruby, we can concatenate two arrays using the `+` operator or the `concat` method. 

Using the `+` Operator:

```ruby
# Creating two arrays
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]

# Concatenating two arrays using +
new_arr = arr1 + arr2

# Output
p new_arr  # [1, 2, 3, 4, 5, 6]
```

Using the `concat` Method:

```ruby
# Creating two arrays
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]

# Concatenating two arrays using concat method
arr1.concat(arr2)

# Output
p arr1  # [1, 2, 3, 4, 5, 6]
```

Both of these methods will produce the same output, a new array that contains all the elements of the original arrays in the order they were concatenated.