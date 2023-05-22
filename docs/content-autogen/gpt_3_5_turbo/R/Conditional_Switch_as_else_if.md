In R, the switch statement can be used to substitute a sequence of else if statements. The syntax of the switch statement is as follows:

```
switch(expr, case1, case2, ...)
```

where `expr` is the expression to evaluate and `case1`, `case2`, etc. are the different cases to compare the expression against. Here is a simple example:

```
x <- 3

result <- switch(x,
  "case1" = "x is equal to 1",
  "case2" = "x is equal to 2",
  "case3" = "x is equal to 3",
  "case4" = "x is equal to 4",
  "default" = "x is not in the range of cases"
)

print(result)
```

In this example, if `x` is equal to 3, the resulting value will be "x is equal to 3". If `x` is not equal to any of the given cases, "default" will be executed and the resulting value will be "x is not in the range of cases".

Notice that the switch statement does not require any `else` statement at the end, as it has a specific `default` case to handle all other cases that do not match the given cases.