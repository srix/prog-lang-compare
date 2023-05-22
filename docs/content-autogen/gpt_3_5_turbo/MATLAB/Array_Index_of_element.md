To get the index of an element in an array in MATLAB, you can use the `find` function. The `find` function returns the indices of all the elements of an array that satisfy a specified logical condition. Here's an example:

Suppose you have an array `A = [2 5 6 4 8]`. 

If you want to find the index of the element `6` in the array, you can use the `find` function as follows:

```
idx = find(A==6)
```

This will return the index(es) of all the element(s) that match the specified condition, in this case, the index of the element `6` in the array `A`. The output will be:

```
idx =

     3
```

This means that the element `6` is located at the 3rd index of the array. 

If the specified element is not in the array, then the `find` function will return an empty array. For example:

```
idx = find(A==10)
```

This will return an empty array `[]`, since the element `10` is not found in the array `A`.