In R, we can convert an integer to a float by simply adding a decimal point to the integer. Here's an example:

```R
# Integer
a <- 5

# Converting to float
b <- 5.

# Printing class of a and b
print(class(a)) # "integer"
print(class(b)) # "numeric"
```

In the above example, we first assigned an integer value 5 to the variable 'a'. Then, we assigned a float value 5.0 (adding a decimal point) to the variable 'b', which is the same as converting 'a' to a float. Finally, we printed the class of both 'a' and 'b' with the 'class()' function, and we can see that 'a' is an "integer" and 'b' is a "numeric" (float) value.