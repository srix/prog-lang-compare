In MATLAB, while loop is a control flow statement that allows you to execute a block of code repeatedly as long as the specified condition remains true. Here's the syntax for using the while loop:

```matlab
while condition
    statement
    statement
    .
    .
end
```

Here, condition is a logical expression that is evaluated at the beginning of each iteration of the loop. If the condition is true, the statements inside the loop are executed and the condition is evaluated again at the end of the iteration. This process continues until the condition becomes false.

Here's an example of using the while loop to print the numbers from 1 to 10:

```matlab
n = 1;  % Initialize the loop variable
while n <= 10  % Condition
    disp(n);  % Statement to execute
    n = n + 1;  % Update the loop variable
end
```

In this example, the variable n is initialized to 1. The while loop checks if n <= 10 and if it's true, it displays the value of n and increments n by 1. This process repeats until n becomes greater than 10. 

Another example could be finding the sum of an array of numbers using while loop:

```matlab
A = [7, 3, 2, 9, 5];
n = 1;  % Initialize the loop variable
sum = 0; % Initialize the sum of numbers to 0
while n <= length(A)  % Condition
    sum = sum + A(n);  % Add the value of A(n) to the sum
    n = n + 1;  % Update the loop variable
end
disp(['The sum of the numbers in the array is ' num2str(sum)]);
```

In this example, we have an array of numbers A. We use a while loop to iterate through the array, add each number to the sum, and update the loop variable n. Finally, we display the sum of the numbers in the array.