In Rust, you can convert a string to an integer by using the `parse()` method defined on the string slice type `&str`. This method converts the string slice to the desired integer type using certain rules, and returns a result which can be either `Ok(integer)` if the conversion is successful or `Err` if the string slice cannot be parsed.

Here's an example of how to convert a string to an integer in Rust:

```rust
let str_num = "123";
let result = str_num.parse::<i32>();
match result {
    Ok(num) => println!("The converted integer is {}", num),
    Err(e) => println!("Error: {}", e),
}
```

In this example, the `str_num` variable holds the string "123", and we are converting it to a 32-bit integer using the `parse()` method and the type annotation `i32`. The `result` variable holds the result of the conversion, which can either be an `Ok` variant with the converted integer or an `Err` variant with an error message.

We then use a `match` statement to check if the conversion was successful or not. If it was, we print the converted integer. Otherwise, we print the error message.

Another example:

```rust
let str_num = "987654321";
let result = str_num.parse::<u64>();
if let Ok(num) = result {
    println!("The converted integer is {}", num);
} else {
    println!("Error: {:?}", result.unwrap_err());
}
```

In this example, we are converting the string "987654321" to a 64-bit unsigned integer using the `parse()` method and the type annotation `u64`. Instead of using a `match` statement, we are using an `if let` statement to check if the conversion was successful. If it was, we print the converted integer. Otherwise, we print the error message using the `unwrap_err()` method on the `Err` variant.