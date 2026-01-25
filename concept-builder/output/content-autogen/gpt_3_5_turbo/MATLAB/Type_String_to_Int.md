In MATLAB, you can convert a string to an integer using the `str2num()` or `str2double()` functions. The basic syntax for `str2num()` is:

```
num = str2num(str);
```

where `str` is the string you want to convert and `num` is the resulting integer.

Here's an example:

```matlab
str = '123';
num = str2num(str);
disp(num);
```

Output:

```
123
```

You can also use the `str2double()` function to convert a string to a double-precision floating-point number:

```matlab
str = '123.456';
num = str2double(str);
disp(num);
```

Output:

```
123.4560
```

Note that `str2num()` and `str2double()` will both return `NaN` (not a number) if the input string cannot be converted to a number, for example if the string contains non-numeric characters:

```matlab
str = 'abc123';
num = str2num(str);
disp(num);
```

Output:

```
NaN
```