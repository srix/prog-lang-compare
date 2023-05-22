In MATLAB, unless is a conditional statement that allows executing a block of code if the condition is false. It is similar to the if statement but works in the opposite way. The syntax for unless statement in MATLAB is:

```matlab
unless condition
    % code to execute if the condition is false
end
```

Here, the code inside the unless statement will only be executed if the condition is false. If the condition is true, the code inside the unless statement will be skipped.

Here is an example of how to use unless in MATLAB:

```matlab
% program to print odd numbers
for i = 1:10
    unless mod(i, 2) == 0
        fprintf('%d\n', i); % print the odd number
    end
end
```

In this example, the code inside the unless block will only be executed when the remainder of i divided by 2 is not equal to zero, which means the number is odd. Therefore, the program will print 1, 3, 5, 7, and 9.