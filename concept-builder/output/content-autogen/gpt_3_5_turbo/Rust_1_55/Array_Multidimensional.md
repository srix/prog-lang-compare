Sure! In Rust, you can create a multidimensional array using nested square brackets. Here's an example of how you can create a two-dimensional array:

```rust
let mut matrix: [[i32; 3]; 3] = [[0; 3]; 3];
```

In the above example, we've created a 2D array named matrix that has dimensions 3x3. The `mut` keyword indicates that the array is mutable and can be modified. Each element of the array is initialized to 0 using the `[[0; 3]; 3]` syntax. The `[[0; 3]; 3]` syntax creates a new array that contains three elements that are each an array of length 3, with all elements initialized to 0.

Now suppose you want to create a 3D array with dimensions 2x2x2, with each element initialized to 1. You can do that as follows:

```rust
let mut arr: [[[i32; 2]; 2]; 2] = [[[1; 2]; 2]; 2];
```

In the above example, we've created a 3D array named `arr` with dimensions 2x2x2. Each element of the array is an array of length 2, with each element of those arrays being a i32 value initialized to 1.

You can also access elements of the array using their indices. Here's how to access the element at row 1, column 2 of `matrix`:

```rust
matrix[1][2] = 42;
```

In this case, we're modifying the value of the element at row 1, column 2 of `matrix` to be 42. You can also use nested loops to iterate over the elements of a multidimensional array.