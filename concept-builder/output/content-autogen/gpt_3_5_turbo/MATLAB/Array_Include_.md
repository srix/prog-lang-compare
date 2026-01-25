In MATLAB, you can check whether an array includes an element or not using the "ismember" function. The syntax of the "ismember" function is as follows: 

```matlab
[tf, loc] = ismember(A, B)
```

Here, `A` is the array you want to find an element in and `B` is the element, or another array containing elements you want to look for in `A`. 
If `B` is an array, `ismember` will return a logical array the same size as `A`, where each element is true if the corresponding element in `A` is also in `B`, and false otherwise. 

The output of `ismember` contains two parameters:

- `tf` is a logical array that specifies if the element is present in the array or not. 
- `loc` is an integer array that returns the indexes of `B` whose elements are found in `A`. 

Here's an example:

```matlab
A = [1 2 3 4 5];
B = [3 6 9];

[tf, loc] = ismember(A, B);

disp(tf); % [1 1 1 0 0]
disp(loc); % [3 0 0 0 0]
```

In the above example, `ismember` checks if elements of array `B` are present in array `A`. We can see that `3` is present in `A` so the first element of `tf` is 1 and its index in `B` is the first element of `loc`. The second and third element of `tf` are 0, as they are not present in `A`, and their corresponding values in `loc` are 0.