Python 3.10 introduces a new and easier way to interpolate strings using an `f` string. An `f` string is a type of string literal that allows you to embed expressions inside string literals, using curly brackets `{}`.

Here is an example of how to use `f` strings:

```
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old.")
```

Output:
```
My name is Alice and I am 25 years old.
```

In the above example, we have used curly braces `{}` to embed variables `name` and `age` inside the string. The `f` before the string literal tells Python to treat it as an `f` string.

You can also include expressions inside the curly braces:

```
x = 5
y = 3
print(f"The sum of {x} and {y} is {x+y}.")
```

Output:
```
The sum of 5 and 3 is 8.
```

You can also use formatting codes inside the curly braces to format the output:

```
num = 3.141592653589793
print(f"The value of pi is approximately {num:.2f}.")
```

Output:
```
The value of pi is approximately 3.14.
```

In the above example, we have used the formatting code `:.2f` inside the curly braces to format the output to 2 decimal places.

Overall, interpolation using `f` strings is a simple and easy way to embed variables and expressions in your strings in Python 3.10.