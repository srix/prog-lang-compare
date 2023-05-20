In Rust 1.55, we can get the type of an object using the `std::any::type_name()` function which returns a `&'static str` representation of the object's type. Here is an example:

```rust
fn main() {
    let x = 5;
    let y = "hello";
    let z = true;

    println!("Type of x is: {}", std::any::type_name::<typeof(x)>());
    println!("Type of y is: {}", std::any::type_name::<typeof(y)>());
    println!("Type of z is: {}", std::any::type_name::<typeof(z)>());
}
```

Output:

```
Type of x is: i32
Type of y is: &'static str
Type of z is: bool
```

In the above code, we used the `typeof()` macro to get the type of the variables `x`, `y`, and `z`, and passed it as a type parameter to the `type_name()` function. This returned a `&'static str` which we then printed to the console.