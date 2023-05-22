Sure, you can iterate over an array in MATLAB using a for loop. 

Here's an example:

```MATLAB
% Initialize an array
myArray = [10 20 30 40 50];

% Use a for loop to iterate over the array
for i = 1:length(myArray)
    % Print out each element of the array
    disp(myArray(i))
end
```

In the above code, the for loop iterates over each element of the `myArray` array. The loop variable `i` is initialized to 1 and incremented by 1 at each iteration. The `length` function is used to determine the number of elements in the array.

Inside the loop, the `disp` function is used to print out each element of the array.

Another way to iterate over an array in MATLAB is to use the colon operator to generate a sequence of indices that can be used to access the array elements. Here's an example:

```MATLAB
% Initialize an array
myArray = [10 20 30 40 50];

% Use the colon operator to generate a sequence of indices
indices = 1:length(myArray);

% Iterate over the array using the indices
for i = indices
    % Print out each element of the array
    disp(myArray(i))
end
```

In this code, the `indices` variable is initialized using the colon operator and the `length` function. The `for` loop then iterates over each index in the `indices` array and uses it to access the corresponding element of the `myArray` array.