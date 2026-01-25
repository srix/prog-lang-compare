In Rust, we can concatenate two arrays using the `concat` method. `concat` method concatenates elements from two arrays into a new array. Here's an example:

```rust
let array_one = [1, 2, 3];
let array_two = [4, 5, 6];

let concatenated_array = [&array_one[..], &array_two[..]].concat();

println!("{:?}", concatenated_array);
```

Output:
```
[1, 2, 3, 4, 5, 6]
```

In the example above, we first create two arrays `array_one` and `array_two`. Then we use the `concat` method to concatenate both arrays, using the `&` operator to create a slice of each array. Finally, we print the resulting concatenated array using Rust's `println!` macro.