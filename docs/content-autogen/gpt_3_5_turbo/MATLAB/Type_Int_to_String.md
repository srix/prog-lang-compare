To convert an integer to a a string in MATLAB, you can use the `num2str` function. 

Here are some examples:

```matlab
% Convert integer to string
num = 123;
str = num2str(num);

% Display the string
disp(str);
```

Output:
```
123
```

```matlab
% Convert integer array to string
nums = [1 2 3];
str = num2str(nums);

% Display the string
disp(str);
```

Output:
```
1 2 3
```

```matlab
% Convert integer array to string with delimiter
nums = [1 2 3];
delimiter = '-';
str = num2str(nums, delimiter);

% Display the string
disp(str);
```

Output:
```
1-2-3
```

```matlab
% Convert integer to string with specific format
num = 123;
formatSpec = '%04d';
str = sprintf(formatSpec, num);

% Display the string
disp(str);
```

Output:
```
0123
```

These are just a few examples of how to convert an integer to a string in MATLAB using `num2str`. There are many other ways to format and display integers as strings depending on your requirements.