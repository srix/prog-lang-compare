The `next` and `continue` statements are used in MATLAB to control the flow of loop iterations.

The `next` statement helps skip the current iteration and move to the next one in a loop. It allows the loop to continue without processing the current iteration. 

Here's an example of how to use `next` statement in a `for` loop to skip even numbers and print only odd numbers between 1 and 10:

```
for i=1:10
    if mod(i,2) == 0    %check if i is even
        next            %skip even numbers
    end
    disp(i)             %print odd numbers
end
```
Output: 
```
>> 1
   3
   5
   7
   9
```

In contrast, the `continue` statement allows you to skip the current iteration and move on to the next iteration in a loop. It is particularly useful in nested loops, where you want to skip a particular iteration of an inner loop and move to the next iteration of the outer loop.

Here's an example of how to use `continue` statement in a nested `for` loop. It skips the inner loop when the value of `j` is equal to 2.

```
for i=1:3
    for j=1:3
        if j == 2
            continue %skip inner loop when j=2
        end
        fprintf('i = %d, j = %d\n', i, j) %print values of i and j
    end
end
```
Output: 
```
i = 1, j = 1
   i = 1, j = 3
   i = 2, j = 1
   i = 2, j = 3
   i = 3, j = 1
   i = 3, j = 3
```

Here, `continue` statement helps skip the iteration when `j=2`, and move to the next iteration of the inner loop.