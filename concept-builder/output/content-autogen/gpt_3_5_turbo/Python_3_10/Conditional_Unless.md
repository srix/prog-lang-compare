In Python 3.10, the `unless` keyword has been added as a new feature. It is a control flow statement that works in a similar way to the `if` statement, but with a negative condition. The code block under `unless` is executed only if the condition is False.

Here is the general syntax of the `unless` statement:

```
unless <condition>:
    <code block>
```

Now let's take a look at an example:

```
x = 6

unless x > 10:
    print("x is not greater than 10")
```

Output:

```
x is not greater than 10
```

Here, `unless x > 10` is the condition. Since `x` is less than or equal to 10, and therefore the condition is False, the code block under `unless` is executed, which is to print the message `"x is not greater than 10"`.

We can also use `else` and `elif` statements with `unless`, just like we would with `if`:

```
x = 6

unless x > 10:
    print("x is not greater than 10")
else:
    print("x is greater than 10")
```

Output:

```
x is not greater than 10
```

In this case, since `x` is not greater than 10, the code block under the `unless` statement is executed, which prints `"x is not greater than 10"`. The `else` statement is not executed because the condition is False.

We can also use `elif` if we have multiple conditions:

```
x = 6

unless x > 10:
    print("x is not greater than 10")
elif x < 5:
    print("x is less than 5")
else:
    print("x is between 5 and 10")
```

Output:

```
x is not greater than 10
```

In this example, the condition `x > 10` is False, which means the code block under `unless` is executed. It prints `"x is not greater than 10"`. The `elif` statement is skipped because its condition is also False. The `else` statement is also skipped because the code has already executed the `unless` block.