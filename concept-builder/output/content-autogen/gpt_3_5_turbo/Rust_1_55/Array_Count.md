To count the number of elements in an array matching a condition in Rust 1.55, you can use the `iter()` and `.filter()` methods to create an iterator that only includes elements that match the given condition, and then use the `count()` method to count the number of elements in that iterator. Here's an example:

```rust
let numbers = [1, 2, 3, 4, 5];

// count the number of even numbers in the array
let count_even = numbers.iter().filter(|&n| n % 2 == 0).count();

println!("There are {} even numbers in the array", count_even);
```

In this example, we first define an array of numbers. We then create an iterator over the array with the `iter()` method and use the `.filter()` method to only include elements that are even (i.e., have a remainder of 0 when divided by 2). Finally, we use the `count()` method to count the number of elements in the iterator. The output of this code will be:

```
There are 2 even numbers in the array
```

You can adjust the condition to count elements matching any condition you need.