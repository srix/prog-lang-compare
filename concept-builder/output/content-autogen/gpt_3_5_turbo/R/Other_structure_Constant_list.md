In R, a constant list is a list whose values cannot be changed after it has been created. Constant lists can be created using the `list` function with the argument `constant = TRUE`. Here is an example:

```R
# Create a constant list
my_list <- list(a = 1, b = 2, c = 3, constant = TRUE)

# Access values in a constant list
my_list$a  # 1
my_list$b  # 2
my_list$c  # 3

# Attempt to change a value in a constant list
# This will result in an error because the list is constant
my_list$a <- 4
# Error: replacement has length zero
```

In the above example, we create a constant list called `my_list` with three entries `a`, `b`, and `c`. We set the `constant` argument to `TRUE` to make the list constant. We can access the values in the list using the `$` notation.

However, if we try to change the value of the `a` entry using the `<-` assignment operator, we will get an error message because the list is constant and cannot be changed.