In MATLAB, multiple arguments can be used in a method or function by defining them inside the parentheses after the function name. Here is an example of a function with multiple arguments:

```
function sum = add(x, y, z)
  sum = x + y + z;
end
```

The above function takes three arguments `x`, `y`, and `z`, and returns their sum. Here's how to call this function:

```
result = add(2, 3, 5)
```

The output of the above code will be `10`.

You can also pass arrays as arguments to a function. For example:

```
function sum = add_vectors(v1, v2)
  sum = v1 + v2;
end
```

The above function takes two vectors of equal length as arguments, adds their corresponding elements, and returns a new vector with the sums. Here's how to call this function:

```
result = add_vectors([1, 2, 3], [4, 5, 6])
```

The output of the above code will be `[5, 7, 9]`.

In summary, using multiple arguments in MATLAB functions is as simple as defining them inside the parentheses after the function name.