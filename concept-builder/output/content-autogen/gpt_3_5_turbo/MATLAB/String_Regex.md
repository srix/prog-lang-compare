Regular expressions (regex) are a powerful tool used for text processing, searching, and manipulation. MATLAB has regular expression capabilities built into many of its built-in functions, including `regexp`, `regexprep`, and `regexpi`. 

Here are some examples on how to use regex in MATLAB:

1. `regexp`: The `regexp` function searches a string for a specified pattern and returns the starting and ending indices of all occurrences of the pattern. For example:

```matlab
str = 'The quick brown fox jumps over the lazy dog.'
pattern = '\w+'  % matches any word character
indices = regexp(str, pattern)
```
In this example, `indices` will be a matrix containing the starting and ending indices of each word in the string.

2. `regexprep`: The `regexprep` function replaces one or more occurrences of a pattern in a string with a specified string. For example:

```matlab
str = 'The quick brown fox jumps over the lazy dog.'
pattern = '\s+'  % matches any whitespace character
replace = ', '
new_str = regexprep(str, pattern, replace)
```

In this example, `new_str` will be the same as the original string, but with every instance of whitespace replaced with a comma and a space.

3. `regexpi`: The `regexpi` function is similar `regexp`, but performs a case-insensitive search. For example:

```matlab
str = 'The quick brown fox jumps over the lazy dog.'
pattern = 'fox'
indices = regexpi(str, pattern)
```

In this example, `indices` will be a matrix containing the starting and ending indices of the word "fox" in the string, regardless of whether it is capitalized or lowercase.

These are just a few examples of how to use regex in MATLAB. Regular expressions can be incredibly powerful for text processing and manipulation, and it is important to familiarize yourself with the syntax and capabilities of regular expressions if you want to master text-related tasks in MATLAB.