Ternary operations in MATLAB is a way to write a compact conditional statement that returns a value based on a condition. The general syntax for a ternary operator in MATLAB is: 

`(condition) ? true_expression : false_expression`

Here, `condition` is the logical statement that is tested. If this statement is true, `true_expression` is evaluated, else, `false_expression` is evaluated. 

Let's see a few examples of how to use ternary operations in MATLAB:

Example 1: 

Suppose we have a variable `a` and we want to check if `a` is greater than 5. If it is, we want to print "a is greater than 5", else, we want to print "a is less than or equal to 5". We can use ternary operators to achieve this as follows: 

```matlab
a = 7;
result = (a > 5) ? 'a is greater than 5' : 'a is less than or equal to 5';
disp(result);
```

Output: `a is greater than 5`

Example 2:

Suppose we have two variables `x` and `y` and we want to find the maximum of these two variables. We can use ternary operations as follows:

```matlab
x = 7;
y = 9;
max_val = (x > y) ? x : y;
disp(max_val);
```

Output: `9`

Example 3:

Suppose we have a vector `A` and we want to replace all values less than 0 with 0. We can use ternary operations as follows:

```matlab
A = [-1 2 -3 4 -5];
A = (A < 0) ? 0 : A;
disp(A);
```

Output: `0 2 0 4 0`

In this example, the ternary operator is used to replace all values less than 0 with 0.