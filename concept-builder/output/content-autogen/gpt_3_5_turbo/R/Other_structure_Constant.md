In R, a constant is an object whose value does not change. Constants are useful when you need to define a value that will not change throughout the course of your program.

Here's an example of how to define constants in R using the `const` package:

1. First, you need to install the `const` package by running the following command:

```
install.packages("const")
```

2. Once the package is installed, you can load it into your R session by running this command:

```
library(const)
```

3. Now, you can define a constant using the `const()` function. Here's an example:

```
PI <- const(3.14159)
```

In this example, we defined a constant called `PI` with a value of `3.14159`.

4. You can also define constants with character strings. Here's an example:

```
MESSAGE <- const("Hello, world!")
```

In this example, we defined a constant called `MESSAGE` with a value of `"Hello, world!"`.

5. Once a constant is defined, you can use it throughout your program just like any other variable. However, if you try to change its value, R will throw an error.

Here's an example of using a constant in a calculation:

```
radius <- 2
area <- PI * radius^2
```

In this example, we used the constant `PI` to calculate the area of a circle with a radius of `2`.

Overall, constants can help you write more robust and maintainable code by ensuring that certain values do not change throughout your program.