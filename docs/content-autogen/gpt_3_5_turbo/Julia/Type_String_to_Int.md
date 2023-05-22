To convert a string to an integer in Julia, you can use the `parse()` function. Here's an example where we have a string "10" and want to convert it to an integer:

```julia
str_val = "10"
int_val = parse(Int, str_val)

# Output: 10
```

In the above code, we first define the string we want to convert to an integer as `str_val`. Then, we use the `parse()` function and specify that we want to convert the string to an integer by using the `Int` keyword. The resulting integer value is stored in the variable `int_val`. 

Here's another example where we have a string "1000" and want to convert it to an integer:

```julia
str_val = "1000"
int_val = parse(Int, str_val)

# Output: 1000
```

In this example, we are again using the `parse()` function with the `Int` keyword to convert the string "1000" to an integer. The resulting integer value is stored in the `int_val` variable.