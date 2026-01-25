In Rust, a constant is a variable which is immutable and whose value cannot be changed after it has been declared. The keyword `const` is used to define a constant in Rust.

Here is an example of how to declare a constant and use it in Rust:

```
const PI: f32 = 3.14159265359;

fn main() {
    let radius = 10.0;
    let circumference = 2.0 * PI * radius;
    println!("The circumference of the circle is {} units", circumference);
}
```

In this example, we have declared a constant named `PI` and defined its value to be `3.14159265359`. We have also declared a variable named `radius` and initialized it to `10.0`. We then calculate the circumference of the circle using the formula `2 * PI * radius` and store the result in a variable named `circumference`. Finally, we print out the value of `circumference` using the `println!` macro.

Another example of using constant in Rust is:

```
const MAX_ITEMS: usize = 100;

fn main() {
    let mut items = [0; MAX_ITEMS];
    items[0] = 10;
    items[1] = 20;
    items[2] = 30;
    println!("The first three items are [{}, {}, {}]", items[0], items[1], items[2]);
}
```

In this example, we have declared a constant named `MAX_ITEMS` and defined its value to be `100`. We then declare a mutable array named `items` with a length of `MAX_ITEMS`. We assign values to the first three elements of the `items` array and then print out their values.

By using constants, we can ensure that certain values in our code are always fixed and cannot be inadvertently changed. Constants are useful for defining mathematical or physical constants, maximum or minimum limits for data values, or other values that must be known at compile time.