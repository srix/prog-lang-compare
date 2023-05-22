In MATLAB, you can find all elements of an array satisfying a condition using logical indexing. 

Suppose you have an array `x` with random values:

```matlab
x = [2, 8, 4, 6, 9, 3, 1, 7];
```

Now, let's say you want to find all the elements of `x` that are greater than or equal to `5`. You can create a logical expression using the comparison operator `>=` and assign the result to a variable or use it directly to index the array:

```matlab
% Storing the result in a variable
condition = x >= 5;
result = x(condition);

% Using logical indexing directly
result = x(x >= 5);
```

Both approaches will return an array with the values `8, 6, 9, 7`, which are the elements of `x` satisfying the condition.

You can also use logical indexing with multiple conditions. For example, let's find all the elements of `x` that are greater than `3` and less than or equal to `7`:

```matlab
result = x(x > 3 & x <= 7);
```

The result will be an array with the values `4, 6, 7`.

Remember that logical indexing returns a copy of the original array, not a view. Therefore, any changes you make to the result array will not affect the original one.