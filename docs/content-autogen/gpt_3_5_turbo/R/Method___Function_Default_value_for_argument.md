In R, by default, the arguments in a function have `NULL` as the default value. However, one can specify a default value for a parameter by assigning a value to it at the function definition.

Here is an example:

```
my_function <- function(a, b = 10) {
  result <- a + b
  return(result)
}
```

In the above function, `b` is assigned a default value of `10`. This means that when the function is called, if the value for `b` is not specified, it will take the value of `10`. 

For example, if we call the function `my_function` with only one argument:

```
my_function(5)
```

In this case, `b` takes the default value of `10` and the output will be `15`.

However, if we pass a value for `b`:

```
my_function(5, 7)
```

In this case, `b` takes the value `7` that we passed and the output will be `12`.