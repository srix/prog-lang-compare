In Julia, a constant list is a list whose value cannot be changed. It is defined using the `const` keyword. Once a value is assigned to a constant list, it cannot be reassigned, which helps in avoiding accidental modification of data.

Here's an example of how to define a constant list in Julia:

```
const my_list = [1, 2, 3, 4]
```

In the above code, `my_list` is a constant list with values `[1, 2, 3, 4]`. 

Attempting to reassign a value to a constant list will result in an error:

```
my_list = [5, 6, 7, 8] # Error: invalid redefinition of constant my_list
```

However, the values within the constant list can still be accessed and modified:

```
my_list[1] = 10 # okay
println(my_list) # prints [10, 2, 3, 4]
```

Although modifying a value inside a constant list may still be possible, it's not recommended. If you want to ensure the values inside are never modified, you should consider using the `ImmutableArrays` package in Julia.