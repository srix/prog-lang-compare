In MATLAB, you can get the type of an object using the `class()` function. Here are some examples:

Example 1: Get the type of a variable:

```matlab
x = 5;
class(x)
```

This will output 'double', which indicates that the variable `x` is a double-precision floating-point number.

Example 2: Get the type of a string:

```matlab
str = 'hello';
class(str)
```

This will output 'char', which indicates that the variable `str` is a character array.

Example 3: Get the type of a structure:

```matlab
s.a = 1;
s.b = 2;
class(s)
```

This will output 'struct', which indicates that the variable `s` is a structure array.

Example 4: Get the type of a function handle:

```matlab
f = @sin;
class(f)
```

This will output 'function_handle', which indicates that the variable `f` is a handle to a mathematical function (in this case, the sine function).

Example 5: Get the type of a cell array:

```matlab
c = {'hello', 'world'};
class(c)
```

This will output 'cell', which indicates that the variable `c` is a cell array containing two character arrays.