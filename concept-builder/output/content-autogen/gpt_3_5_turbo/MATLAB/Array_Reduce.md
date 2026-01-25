In MATLAB, there are two ways to reduce an array to a single value: using the sum function or using the prod function.

1. Using the sum function:

The sum function adds up all the elements in an array and returns a single value.

Syntax: `total_sum = sum(array_name)`

Example: 

```
% Creating an array
my_array = [1,2,3,4,5];

% Adding up all the elements of the array
sum_of_array = sum(my_array);

% Displaying the result
disp(sum_of_array);
```

Output:
```
15
```

2. Using the prod function:

The prod function multiplies all the elements in an array and returns a single value.

Syntax: `product_value = prod(array_name)`

Example:

```
% Creating an array
my_array = [1,2,3,4,5];

% Multiplying all the elements of the array
product_value = prod(my_array);

% Displaying the result
disp(product_value);
```

Output:
```
120
```

Note: These functions can also be used along with the `dim` argument to specify the dimension along which the reduction operation needs to be performed.