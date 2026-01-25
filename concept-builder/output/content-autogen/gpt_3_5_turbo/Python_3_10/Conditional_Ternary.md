In Python, a ternary operator is a shorthand way of writing a simple if else statement on a single line.

The syntax for a ternary operator in Python is:

`value_if_true if condition else value_if_false`

The way this works is that Python evaluates the condition, and if it is true, returns the value_if_true expression. Otherwise, it returns the value_if_false expression.

Here is a simple example to demonstrate its usage:

```
age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are not an adult")
```

This can be simplified using the ternary operator as:

```
age = 18

print("You are an adult" if age >= 18 else "You are not an adult")
```

Another example is the following:

```
x = 10

message = "Positive" if x > 0 else "Negative"

print(message)
```

This will output `Positive` since the condition `x > 0` is true.

Ternary operators can be useful to simplify code and make it easier to read, especially for simple if else statements. However, it is important to use them in moderation and not overuse them, as they may make more complex code harder to read and understand.