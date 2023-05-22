In MATLAB, you can compare numbers using various relational operators such as "<" (less than), ">" (greater than), "<=" (less than or equal to), ">=" (greater than or equal to), "==" (equal to), and "~=" (not equal to). 

Here are some examples:

```
a = 5;
b = 10;
c = 5;

% less than
if a < b
    disp('a is less than b.')
end

% greater than
if b > a
    disp('b is greater than a.')
end

% less than or equal to
if a <= c
    disp('a is less than or equal to c.')
end

% greater than or equal to
if b >= c
    disp('b is greater than or equal to c.')
end

% equal to
if a == c
    disp('a is equal to c.')
end

% not equal to
if b ~= c
    disp('b is not equal to c.')
end
```
Output: 
```
a is less than b.
b is greater than a.
a is less than or equal to c.
b is greater than or equal to c.
a is equal to c.
b is not equal to c.
```

In the above example, we are comparing the values of variables a, b, and c using different relational operators and printing a message if the comparison is true.