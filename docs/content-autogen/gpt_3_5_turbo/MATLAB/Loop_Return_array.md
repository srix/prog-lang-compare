In MATLAB, we can create an array using square brackets [ ] and separate elements using commas or spaces. We can return an array from a function in MATLAB by assigning the array to the output argument of the function using the keyword `return`.

Here are some examples:

Example 1: Return a 1D array of numbers from a function
```
function output_array = generate_array(input_arg)
    % some code to generate an array of numbers 
    output_array = [1, 2, 3, 4, 5];
    return
end
```
The function `generate_array` takes an input argument and returns an array of numbers. We create an array `output_array` and assign the numbers 1 through 5 to it. Finally, we use the `return` keyword to return the array from the function.

Example 2: Return a 2D array of numbers from a function
```
function output_array = generate_2D_array(rows, cols)
    % some code to generate a 2D array of numbers 
    output_array = zeros(rows, cols);
    for i = 1:rows
        for j = 1:cols
            output_array(i,j) = i + j;
        end
    end
    return
end
```

The function `generate_2D_array` takes two input arguments (`rows` and `cols`) and returns a 2D array of numbers. We create an array `output_array` using the `zeros` function and assign each element to the sum of its row and column indices using two nested `for` loops. Finally, we use the `return` keyword to return the array from the function.

To call either of these functions and get the returned array values:
```
my_array = generate_array(input);
my_2D_array = generate_2D_array(rows, cols);
```
`my_array` and `my_2D_array` will now hold the array values returned from the respective functions.