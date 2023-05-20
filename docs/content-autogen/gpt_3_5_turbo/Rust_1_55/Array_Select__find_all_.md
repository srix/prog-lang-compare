In Rust 1.55, you can use the `filter` method to find all elements of an array that satisfy a certain condition. This method creates a new iterator that only yields values which pass a specified predicate function.

Here is an example of using the `filter` method to find all elements of an array that are greater than 5:

```rust
fn main() {
    let num_array = [1, 8, 2, 9, 4, 7, 5, 6];
    let result = num_array.iter().filter(|&x| *x > 5).collect::<Vec<&i32>>();
    println!("{:?}", result);
}
```

Output:
```
[&8, &9, &7, &6]
```

In this example, we use the `iter` method to create an iterator over the elements of the array. Then, we use the `filter` method to create a new iterator that only yields values which are greater than 5. Finally, we use the `collect` method to collect the filtered values into a vector.

Note that we use the `&` symbol to dereference the iterator values since the `filter` method returns references to the original array elements. We also explicitly annotate the vector type using `::<Vec<&i32>>()` to avoid the type inference error.

You can modify the condition in the `filter` method to satisfy any other requirements. For example, you could use `|&x| x % 2 == 0` to find all even numbers in the array.