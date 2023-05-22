In MATLAB, an alias is a user-defined name for a function or a file. Aliases can be created to simplify commands, make them more memorable, or to avoid conflicts with existing function names. Here's an example:

Suppose you frequently use the function `sqrt()` to calculate the square root of a number, but you find it too cumbersome to type out every time. You can create an alias for `sqrt()` using the `alias` command:

```
alias s sqrt
```

This creates an alias `s` for `sqrt()`. Now, you can simply type `s(x)` instead of `sqrt(x)` to calculate the square root of `x`. Note that the alias `s` is only valid for the current MATLAB session; you'll have to recreate it every time you start MATLAB.

Here's another example, where we create an alias for a custom function `my_sum()`:

```
function result = my_sum(a, b)
    result = a + b;
end

alias add my_sum
```

This creates an alias `add` for the custom function `my_sum()`. Now, you can use `add(a,b)` instead of `my_sum(a,b)` to add `a` and `b`.

To view a list of all defined aliases, use the command `alias` without any input arguments. To remove an alias, use the `unalias` command followed by the alias name. For instance, to remove the alias `s` we created earlier, use the command:

```
unalias s
```