In Julia, a multidimensional array is a collection of elements of the same data type, arranged in a matrix-like format with multiple dimensions.

To create a multidimensional array in Julia, we use the `Array` constructor and specify the dimensions as a tuple. Here is an example of a 2x3x4 array of integers:

```
A = Array{Int64,3}(undef,2,3,4)
```

In this example, `Array{Int64,3}` specifies that we want an array of integers (`Int64`) with three dimensions. The `undef` keyword tells Julia to initialize the array with undefined values. We then provide the dimensions of the array as a tuple `(2,3,4)`.

To initialise the array with specific values, we can replace `undef` with the values we want. For example, to create a 2x3x4 array of zeros, we can use:

```
B = zeros(Int64, 2,3,4)
```

Similarly, to create a 2x3x4 array of ones, we can use:

```
C = ones(Int64, 2,3,4)
```

Here is an example of how to create and initialise a 2x3x4 array with random values between 0 and 1:

```
D = rand(Float64, 2,3,4)
```

These are just a few examples of how to create and initialise multidimensional arrays in Julia. The process of creating and initialising a multidimensional array is the same, regardless of the size or data type of the array.