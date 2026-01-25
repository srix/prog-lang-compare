In Julia, to get the size of an array, you can use the built-in `size()` function. 

Here's an example:

```julia
arr = [1, 2, 3, 4, 5]
println(size(arr)) #(5,)
```

The `size()` function returns a tuple with the dimensions of the array. In the example above, the array `arr` has only one dimension with a length of 5.

If you have a multi-dimensional array, the `size()` function will return a tuple with the length of each dimension. Here's an example:

```julia
mat = [1 2; 3 4; 5 6]
println(size(mat)) #(3, 2)
```

In this example, the matrix `mat` has two dimensions: 3 rows and 2 columns. The `size()` function returns a tuple with the length of each dimension, `(3, 2)`.