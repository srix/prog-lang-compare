In Julia, you can define a method or function in runtime using the `eval` function. The `eval` function evaluates and executes Julia expressions dynamically. Here is an example:

```
# Define a function that takes two arguments
function add(x, y)
    return x + y
end

# Define a new method for the add function
eval("function add(x::String, y::String)\n return parse(Int,x) + parse(Int,y)\nend")

# Call the new method
println(add("3", "5")) # Output: 8
```

In this example, we defined a `add` function that takes two arguments. Then, we defined a new method for the `add` function in runtime using the `eval` function. The new method takes two strings, converts them into integers using the `parse` function, and returns the sum. Finally, we called the new method with two strings as arguments, and it returned the expected sum of the two integer values represented by the strings.