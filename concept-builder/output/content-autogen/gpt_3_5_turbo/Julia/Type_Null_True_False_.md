In Julia, you can check if a value is null using the `isnothing()` function. Here's an example:

```julia
x = nothing

if isnothing(x)
    println("x is null")
else
    println("x is not null")
end
```

Output:
```
x is null
```

You can check if a value is true or false using the standard boolean operators (`&&` and `||`) or with the `!` operator. Here's an example:

```julia
x = true
y = false

if x && !y
    println("Both x and y are true")
else
    println("Either x or y is false")
end
```

Output:
```
Both x and y are true
```

You can also check if a value is true or false with the `is` operator. Here's an example:

```julia
x = true

if x isa Bool
    if x
        println("x is true")
    else
        println("x is false")
    end
else
    println("x is not a boolean value")
end
```

Output:
```
x is true
```