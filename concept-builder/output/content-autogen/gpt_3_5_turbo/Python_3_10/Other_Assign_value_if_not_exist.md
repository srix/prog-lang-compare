In Python 3.10, you can use the ":= " operator to assign a value to a variable only if it does not already exist. This is also known as the "walrus operator".

Here is an example code that demonstrates how to use the "walrus operator" in Python 3.10 to assign a value only if it does not already exist:

```
# Using Walrus Operator
# Assign value to variable only if it does not exist

my_var = "some value"
if (my_var_new := "new value") != my_var:
    my_var = my_var_new

print(my_var)
```

In the code above, the "walrus operator" is used to assign the value "new value" to the variable "my_var_new". Then, the value of "my_var_new" is compared to the value of "my_var" using an "if" statement.

If the two values are not equal (i.e. "my_var_new" does not exist in "my_var"), then the value of "my_var_new" is assigned to "my_var".

Finally, the value of "my_var" is printed, which will be "new value" in this example because "my_var_new" did not already exist in "my_var".