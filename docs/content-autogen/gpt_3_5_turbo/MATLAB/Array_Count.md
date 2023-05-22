To count the number of elements in an array that match a condition in MATLAB, you can use the `sum()` function. The `sum()` function will count the number of elements in an array that evaluate to true when a condition is applied.

Here's an example of how to use the `sum()` function to count the number of elements in an array that are greater than 5:

```matlab
% Create an array
array = [1, 6, 3, 8, 2, 9];

% Count the number of elements greater than 5
count = sum(array > 5);
disp(count); % Output: 3
```

In this example, the `array` variable is created with the values [1, 6, 3, 8, 2, 9]. The `sum()` function is used to count the number of elements in the `array` variable that are greater than 5, which is 3.

You can also count the number of elements that match a more complex condition using logical operators such as `&` (AND) and `|` (OR). Here's an example of how to use logical operators to count the number of elements in an array that are greater than 5 and less than 9:

```matlab
% Create an array
array = [1, 6, 3, 8, 2, 9];

% Count the number of elements greater than 5 and less than 9
count = sum(array > 5 & array < 9);
disp(count); % Output: 2
```

In this example, the `sum()` function is used to count the number of elements in the `array` variable that are greater than 5 and less than 9, which is 2.