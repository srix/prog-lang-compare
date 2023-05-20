In Rust, you can iterate over an array in several ways. Here are some examples:

1. Using a for loop:

```rust
let arr = [1, 2, 3, 4, 5];

for item in &arr {
    println!("{}", item);
}
```

In the above code, we have used a for loop to iterate over the `arr` array. By using the `&` operator, we are borrowing the array, which means we are not transferring ownership of the array and can use it again later.

2. Using the `iter()` method:

```rust
let arr = [1, 2, 3, 4, 5];

for item in arr.iter() {
    println!("{}", item);
}
```

In this code, we are using the `iter()` method to create an iterator over the array `arr`. It's important to note that the `iter()` method doesn't transfer ownership of the array, so we can still use it later in the code.

3. Using the `enumerate()` method:

```rust
let arr = [1, 2, 3, 4, 5];

for (index, item) in arr.iter().enumerate() {
    println!("Index: {}, Item: {}", index, item);
}
```

In this code, we are using the `enumerate()` method to create an iterator that returns a tuple of the array's index and its corresponding value. We can then use destructuring to separate the values of the tuple and print them.

All three examples achieve the same result of iterating over the array. The method to use depends on your use case and preference.