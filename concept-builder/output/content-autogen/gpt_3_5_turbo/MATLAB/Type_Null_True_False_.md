In MATLAB, you can check if a value is null/true/false using logical operators or built-in functions. Here are some examples:

1. Logical operators:

a) == (equals) - returns true if the values are equal, false otherwise.

```matlab
x = 5;
if (x == 5)
    disp('x equals 5');
end
```

b) ~= (not equals) - returns true if the values are not equal, false otherwise.

```matlab
x = 7;
if (x ~= 5)
    disp('x does not equal 5');
end
```

c) && (and) - returns true if both conditions are true, false otherwise.

```matlab
x = 5;
y = 10;
if (x == 5 && y == 10)
    disp('x equals 5 and y equals 10');
end
```

d) || (or) - returns true if at least one of the conditions is true, false otherwise.

```matlab
x = 3;
y = 4;
if (x == 5 || y == 4)
    disp('either x equals 5 or y equals 4');
end
```

2. Built-in functions:

a) isnull() - returns true if the value is null, false otherwise.

```matlab
x = [];
if (isnull(x))
    disp('x is null');
end
```

b) islogical() - returns true if the value is a logical value (true or false), false otherwise.

```matlab
x = true;
if (islogical(x))
    disp('x is a logical value');
end
```

c) isequal() - returns true if the values are equal, false otherwise.

```matlab
x = 5;
if (isequal(x, 5))
    disp('x equals 5');
end
```