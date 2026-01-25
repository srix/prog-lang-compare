In MATLAB, there are multiple ways to iterate over an array with index. Here are two examples:

1. Using for loop:

The for loop allows you to iterate over an array with an index variable. You can use this index variable to access elements of the array. Here is an example:

```matlab
% create an array
A = [1 2 3 4 5];

% iterate over the array with index
for i = 1:length(A)
    fprintf('A(%d) = %d\n', i, A(i));
end
```

Output:

```
A(1) = 1
A(2) = 2
A(3) = 3
A(4) = 4
A(5) = 5
```

2. Using while loop:

You can also use a while loop to iterate over an array with an index. You first need to set the index to 1 and then increment it by 1 until you reach the end of the array. Here is an example:

```matlab
% create an array
A = [1 2 3 4 5];

% initialize the index
i = 1;

% iterate over the array with index using while loop
while i <= length(A)
    fprintf('A(%d) = %d\n', i, A(i));
    i = i + 1;
end
```

Output:

```
A(1) = 1
A(2) = 2
A(3) = 3
A(4) = 4
A(5) = 5
```

Both for loop and while loop can be used to iterate over arrays with index in MATLAB. The for loop is preferred when you know the number of iterations beforehand, while the while loop is preferred when the number of iterations is unknown.