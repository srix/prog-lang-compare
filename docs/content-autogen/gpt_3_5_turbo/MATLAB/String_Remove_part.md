Removing a part of a string in MATLAB can be done using the `erase()` or `strrep()` functions. In the `erase()` function, you can specify the starting and ending indices of the string to remove. In the `strrep()` function, you can replace the substring with an empty string.

Here are some examples to illustrate how to remove part of a string in MATLAB:

1. Using `erase()` function to remove a substring by specifying the indices:

```
str = 'Hello World';
new_str = erase(str, 7:11);
disp(new_str); % Output: 'Hello '
```

In this example, the `erase()` function removes the substring 'World' starting from index 7 and ending at index 11. The resulting string is 'Hello '.

2. Using `strrep()` function to replace a substring with an empty string:

```
str = 'Hello World';
new_str = strrep(str, 'World', '');
disp(new_str); % Output: 'Hello '
```

In this example, the `strrep()` function replaces the substring 'World' with an empty string, effectively removing it from the original string. The resulting string is 'Hello '.