To get the maximum of two numbers in Julia, you can use either the `max` function or the ternary operator `>`. The `max` function takes in two or more arguments, and returns the maximum value among them. Here's an example:

```
julia> max(4, 7)
7

julia> max(8.9, -3.2, 5.6)
8.9
```

Alternatively, you can use the ternary operator `>` to compare the two values, like so:

```
julia> 4 > 7 ? 4 : 7
7
```

This code checks whether 4 is greater than 7. Since this is not true, it returns the second value, which is 7. Here's an example using floating-point numbers:

```
julia> 8.9 > -3.2 ? 8.9 : -3.2
8.9
```

This code checks whether 8.9 is greater than -3.2. Since this is true, it returns the first value, which is 8.9. 

To get the minimum of two numbers in Julia, you can use either the `min` function or the ternary operator `<`. The `min` function takes in two or more arguments, and returns the minimum value among them. Here's an example:

```
julia> min(4, 7)
4

julia> min(8.9, -3.2, 5.6)
-3.2
```

Alternatively, you can use the ternary operator `<` to compare the two values, like so:

```
julia> 4 < 7 ? 4 : 7
4
```

This code checks whether 4 is less than 7. Since this is true, it returns the first value, which is 4. Here's an example using floating-point numbers:

```
julia> 8.9 < -3.2 ? 8.9 : -3.2
-3.2
```

This code checks whether 8.9 is less than -3.2. Since this is not true, it returns the second value, which is -3.2.