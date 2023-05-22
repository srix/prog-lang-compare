In MATLAB, you can check if a string is a number using the `isnumeric()` function. This function returns a logical value of true if the input is numeric and false otherwise. 

Here's an example code snippet which demonstrates how to use the `isnumeric()` function in MATLAB to check if a string is a number:

```matlab
% Define a string variable
str = '123.456';

% Use isnumeric() function to check if str is a number
if isnumeric(str2double(str))
    disp('The input string is a number.');
else
    disp('The input string is not a number.');
end
```

In the above example, we first define a string variable `str` which contains a number in string format. Then we use the `str2double()` function to convert the string to a double precision number. Finally, we pass the converted number to the `isnumeric()` function to check if the input string is a number.

Note that if the input string is not a number, `str2double()` returns NaN (Not a Number), and `isnumeric()` returns false.

Here are a few more examples of how to use the `isnumeric()` function to check if a string is a number:

```matlab
% Example 1
str = '3.14159';
if isnumeric(str2double(str))
    disp('The input string is a number.');
else
    disp('The input string is not a number.');
end

% Example 2
str = '42';
if isnumeric(str2double(str))
    disp('The input string is a number.');
else
    disp('The input string is not a number.');
end

% Example 3
str = 'hello';
if isnumeric(str2double(str))
    disp('The input string is a number.');
else
    disp('The input string is not a number.');
end
```

In example 1 and 2, the input strings are numbers, so the output will be "The input string is a number." In example 3, the input string is not a number, so the output will be "The input string is not a number."