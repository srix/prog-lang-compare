To get the maximum or minimum of two numbers in Rust, you can use the built-in std::cmp::max and std::cmp::min functions.

Here is an example of using the max function:

```rust
let num1 = 5;
let num2 = 10;
let max_num = std::cmp::max(num1, num2);
println!("The maximum number is {}", max_num); // Output: The maximum number is 10
```

In this example, we are declaring two variables `num1` and `num2` with the values of 5 and 10 respectively. We are then using the max function to get the maximum of the two numbers. The result is stored in the `max_num` variable and printed to the console.

Similarly, here is an example of using the min function:

```rust
let num1 = 5;
let num2 = 10;
let min_num = std::cmp::min(num1, num2);
println!("The minimum number is {}", min_num); // Output: The minimum number is 5
```

In this example, we are using the min function to get the minimum of the two numbers and storing the result in the `min_num` variable. The result is then printed to the console.