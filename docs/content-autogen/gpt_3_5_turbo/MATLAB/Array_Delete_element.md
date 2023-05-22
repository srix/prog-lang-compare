To delete an element from an array in MATLAB, we can use the `delete` or `(:, :)` operator.

Let's say we have an array `A` with elements [1, 2, 3, 4, 5]. If we want to delete the element at index 3 (i.e., the number 3 in this case), we can use the following code:

```
A(3) = []     % delete element at index 3
```

After executing this code, the array `A` will be [1, 2, 4, 5], with the element at index 3 (i.e., the number 3) removed.

Alternatively, we can also use the `(:, :)` operator to delete elements. For example, if we want to delete elements 2 and 4 from the array `A`, we can use the following code:

```
A([2, 4]) = []     % delete elements 2 and 4
```

After executing this code, the array `A` will be [1, 3, 5], with the elements at index 2 and 4 (i.e., the numbers 2 and 4) removed.

It is important to note that when we delete elements from an array, the array size is also decreased accordingly.