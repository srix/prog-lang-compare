Float numbers in Rust are a type of data that represents real numbers, including both rational and irrational numbers. Rust 1.55 supports two types of floating-point numbers, `f32` and `f64`. `f32` represents a 32-bit floating-point number, whereas `f64` represents a 64-bit floating-point number. 

Here's an example of how to use float numbers in Rust 1.55:

```rust
fn main() {
    let x: f32 = 3.14;
    let y: f64 = 10.123456789;
    println!("x = {}", x);
    println!("y = {}", y);
}
```
Output:
```
x = 3.14
y = 10.123456789
```

In this example, `x` is a `f32` type and `y` is a `f64` type. The `println!()` macro is used to print the values of `x` and `y`.

Rust also provides several operators to perform arithmetic operations on floating-point numbers. Here are some examples:

```rust
fn main() {
    let a: f32 = 5.6;
    let b: f32 = 2.3;

    println!("{} + {} = {}", a, b, a + b);
    println!("{} - {} = {}", a, b, a - b);
    println!("{} * {} = {}", a, b, a * b);
    println!("{} / {} = {}", a, b, a / b);
}
```

Output:
```
5.6 + 2.3 = 7.9
5.6 - 2.3 = 3.3
5.6 * 2.3 = 12.88
5.6 / 2.3 = 2.434783
```

In this example, various arithmetic operators (addition, subtraction, multiplication, and division) are used to perform operations on `f32` types. 

It's essential to note that floating-point calculations may be prone to rounding errors when dealing with decimal numbers. Therefore it's important to be careful when comparing floating-point numbers for equality.