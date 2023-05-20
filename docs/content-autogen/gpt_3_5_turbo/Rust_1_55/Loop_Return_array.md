In Rust 1.55, you can return an array using the syntax `fn function_name() -> [type; size]`.

Here's an example code to demonstrate this:

```rust
fn main() {
    let arr = create_array();
    println!("{:?}", arr);
}

fn create_array() -> [i32; 5] {
    [1, 2, 3, 4, 5]
}
```

In this example, the `create_array` function returns an array of 5 integers. The `main` function calls `create_array` and prints the resulting array.

You can also return arrays with variables:

```rust
fn main() {
    let arr = create_array();
    let sum: i32 = arr.iter().sum();
    println!("The sum of array is: {}", sum);
}

fn create_array() -> [i32; 5] {
    let arr: [i32; 5] = [1, 2, 3, 4, 5];
    arr
}

```

In this example, the `create_array` function creates an array and assigns it to a variable `arr`. Then it returns `arr` to main function. In main function we calculate the sum of returned array and print it.

Note that the array size must be known at compile time. If you need to return a dynamically sized array, you can use a `Vec` instead.

```rust
fn main() {
    let vec = create_vec();
    println!("{:?}", vec);
}

fn create_vec() -> Vec<i32> {
    vec![1, 2, 3, 4, 5]
}
```

In this example, the `create_vec` function creates a `Vec` of integers and returns it.