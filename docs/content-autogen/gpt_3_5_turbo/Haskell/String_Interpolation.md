In Haskell, string interpolation can be achieved using the `printf` function. This function takes a format string as its first argument and one or more values to be formatted as its subsequent arguments. The format string includes placeholders that are replaced by the corresponding values. 

Here's an example of how to use `printf` to interpolate strings:

```
import Text.Printf

name = "Alice"
age = 30

greeting = printf "Hello, my name is %s and I am %d years old." name age
-- Result: "Hello, my name is Alice and I am 30 years old."
```

In the example above, we defined a `name` and `age` variable, and used them to create a formatted string using `printf`. The `%s` placeholder in the format string is replaced by the `name` variable, and the `%d` placeholder is replaced by the `age` variable.

You can use other placeholders with different data types as well. Here are some examples:

```
piValue = 3.14159
formattedPi = printf "The value of pi is approximately %.2f." piValue
-- Result: "The value of pi is approximately 3.14."

isTrue = True
formattedBool = printf "The value of the boolean is %s." (show isTrue)
-- Result: "The value of the boolean is True."
```

In the example above, we used the `%f` placeholder to format a floating-point value to two decimal places, and the `%s` placeholder to format a boolean value as a string using the `show` function.