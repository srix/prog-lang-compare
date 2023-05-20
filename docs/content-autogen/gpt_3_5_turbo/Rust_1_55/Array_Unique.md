To get the unique elements of an array in Rust 1.55, you can use the `dedup` method provided by the `Vec` type. 

Here's an example:

```rust
let mut arr = [1, 2, 3, 2, 4, 4, 5];

arr.sort();
arr.dedup();

println!("{:?}", arr); // [1, 2, 3, 4, 5]
```

In this code, we first initialize an array `arr` with some duplicate values. We then call the `sort` method to sort the array in ascending order. Finally, we call the `dedup` method to eliminate the duplicate values from the sorted array. When we print `arr`, we see that it now only contains the unique values `[1, 2, 3, 4, 5]`. 

Note that the `dedup` method will only work on mutable `Vec`'s. If you have an immutable array, you can convert it to a mutable `Vec`, dedup it, and then convert it back to an array:

```rust
let arr = [1, 2, 3, 2, 4, 4, 5];

let mut vec = arr.to_vec();
vec.sort();
vec.dedup();

let unique_arr = vec.into_boxed_slice();

println!("{:?}", unique_arr); // [1, 2, 3, 4, 5]
```

In this example, we convert the immutable array `arr` to a mutable `Vec` using the `to_vec` method. We then call the `sort` and `dedup` methods on the `Vec`, and convert it back to an array using the `into_boxed_slice` method. When we print `unique_arr`, we see that it contains only the unique values `[1, 2, 3, 4, 5]`.