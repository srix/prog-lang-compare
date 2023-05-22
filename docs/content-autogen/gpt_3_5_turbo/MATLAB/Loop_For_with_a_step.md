In MATLAB, the `for` loop is used to repeat a specific block of code a fixed number of times. A loop index is used to control the number of iterations of the loop. `for` has the following syntax:

```
for loopIndex = 1:step:maxIndex
    % statements to be executed
end
```

Here, `loopIndex` is the iterative variable that takes on values from `1` to `maxIndex` in steps of `step`. The statements within the loop are executed repeatedly until `loopIndex` reaches `maxIndex`.

For example, let's say we want to display the numbers between 1 and 10, incrementing by 2. We can write the following code:

```
for i = 1:2:10
    disp(i);
end
```

The output would be:

```
1
3
5
7
9
```

Here, the index variable `i` takes on the values `1`, `3`, `5`, `7`, and `9` in steps of `2` and the `disp(i)` statement displays the value of `i` in each iteration.

Another example is if we want to create a vector of even numbers from `2` to `20`, we can use the following code:

```
evenNum = zeros(1,10); % allocate a vector to store the even numbers
n = 2; % initialize the starting number
for i = 1:10
    evenNum(i) = n;
    n = n + 2; % increment by 2
end
disp(evenNum);
```

The output would be:

```
2 4 6 8 10 12 14 16 18 20
```

Here, we create a vector `evenNum` of size `1x10` using the `zeros` function, initialize `n` to `2`, and then use the for loop to iterate 10 times. In each iteration, we assign the value of `n` to the `i-th` element of the `evenNum` vector and then increment `n` by 2 for the next iteration. Finally, we display the `evenNum` vector using the `disp` function.