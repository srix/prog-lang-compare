In C++, "if" is a conditional statement that evaluates to either true or false based on the condition provided. This statement can be used together with "assign" to assign a value or perform an action based on the evaluation of the condition. Here's an example:

```
int x = 10;
if (x > 5) {
  x = 15;
}
```

In the above code, the condition `x > 5` evaluates as true, so the action inside the braces `{}` is executed, which assigns the value 15 to the variable `x`. Therefore, after this code is executed, `x` will have a value of 15.

Another way to use "if" and "assign" together is to use the ternary operator `? :`, which allows for a more concise syntax. Here's an example:

```
int y = 7;
int z = (y > 10) ? 20 : 30;
```

In the above code, the condition `y > 10` evaluates as false, so the value 30 is assigned to the variable `z`. If the condition had evaluated as true, then the value 20 would have been assigned to `z`.