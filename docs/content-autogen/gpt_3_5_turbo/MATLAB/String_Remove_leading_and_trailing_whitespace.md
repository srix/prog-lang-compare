Sure, I can help with that!

To remove leading and trailing whitespaces from a string in MATLAB, you can use the `strtrim()` function. This function returns the same string without leading or trailing white spaces.

Here's an example:

```Matlab
% Define a string with leading and trailing whitespaces:
original_string = "  Remove the leading and trailing spaces from this string.   ";

% Use strtrim to remove leading and trailing whitespaces:
trimmed_string = strtrim(original_string);

% Display the original and trimmed strings:
disp("Original string: " + original_string);
disp("Trimmed string: " + trimmed_string);
```

Output:
```
Original string:   Remove the leading and trailing spaces from this string.   
Trimmed string: Remove the leading and trailing spaces from this string.
```

As you can see, the `strtrim()` function removed the leading and trailing whitespaces from the `original_string`, producing the `trimmed_string` output.