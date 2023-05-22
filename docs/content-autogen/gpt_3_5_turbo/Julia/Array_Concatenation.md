Concatenation of arrays in Julia can be done using the `vcat()` and `hcat()` functions. 

`vcat()` function concatenates two arrays vertically and creates a new array. In other words, it stacks one array on top of the other. 

Example:

```
a = [1 2 3]
b = [4 5 6]
c = vcat(a, b)
```

Output:

```
3×3 Array{Int64,2}:
 1  2  3
 4  5  6
```

`hcat()` function concatenates two arrays horizontally and creates a new array. In other words, it stacks one array next to the other. 

Example:

```
a = [1 2 3]
b = [4 5 6]
c = hcat(a, b)
```

Output:

```
1×6 Array{Int64,2}:
 1  2  3  4  5  6
```

Note that both `vcat()` and `hcat()` functions require that the dimensions of the arrays to be concatenated are compatible.