In MATLAB, the `break` statement is used within loops to terminate their execution prematurely. 

Here's an example where we want to find the first negative number in a vector:

```
vector = [1 4 -3 5 8 -2 6];
for i=1:length(vector)
   if vector(i) < 0
       disp(['First negative number found at index ', num2str(i)]);
       break;
   end
end
```

In this example, the `for` loop is used to iterate over all the elements of the vector. Within the loop, we use an `if` statement to check if the current element is negative. If it is, we use the `disp` function to print the index of that element, and then we use `break` to exit the loop prematurely.

Here's another example of how to use `break` with a `while` loop. In this example, we want to continuously prompt the user for input until they enter a valid number:

```
while true
   num = input('Please enter a number: ');
   if isnumeric(num)
       break;
   else
       disp('Invalid input!');
   end
end
```

In this example, we use a `while` loop that runs indefinitely (i.e., `true`). Within the loop, we prompt the user to enter a number using the `input` function. We then check if the input is a numeric value using the `isnumeric` function. If it is, we use `break` to exit the loop. If not, we print an error message using `disp` and the loop continues to prompt the user for input.