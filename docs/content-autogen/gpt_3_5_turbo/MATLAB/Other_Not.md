In MATLAB, the keyword 'not' is used as '~' to form logical negation of a statement. It is typically used to reverse the logical value of a statement or condition. Here are some examples:

1. Using 'not' to negate a logical statement:

```
x = true;
y = not(x);
disp(y);
% Output: false
```

2. Using 'not' with relational operators:

```
x = 5;
y = 10;
z = not(x > y);
disp(z);
% Output: true
```

3. Using 'not' with logical operators:

```
x = 7;
y = 3;
z = not((x > y) && (y < x));
disp(z);
% Output: false
```

In the above examples, the 'not' keyword is used to reverse or negate the logical value of the condition or statement.