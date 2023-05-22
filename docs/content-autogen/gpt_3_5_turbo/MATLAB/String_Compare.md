In MATLAB, you can compare strings using the "==" operator. This operator returns a logical 1 (true) if the two strings are equal or a logical 0 (false) otherwise. Here's an example:

```matlab
% define two strings
str1 = 'hello';
str2 = 'world';

% compare the two strings
if str1 == str2
    disp('The two strings are equal')
else
    disp('The two strings are not equal')
end
```

In this example, we define two strings "str1" and "str2". We then compare the two strings using the "==" operator and print out a message based on whether they are equal or not.

If you want to compare two strings but ignore the case, you can use the "strcmpi" function. This function is case-insensitive and returns a logical 1 if the two strings are equal (ignoring case) or a logical 0 otherwise. Here's an example:

```matlab
% define two strings
str1 = 'Hello';
str2 = 'hello';

% compare the two strings, ignoring case
if strcmpi(str1, str2)
    disp('The two strings are equal (ignoring case)')
else
    disp('The two strings are not equal (ignoring case)')
end
```

In this example, we define two strings "str1" and "str2" with different cases. We then compare the two strings using the "strcmpi" function and print out a message based on whether they are equal (ignoring case) or not.