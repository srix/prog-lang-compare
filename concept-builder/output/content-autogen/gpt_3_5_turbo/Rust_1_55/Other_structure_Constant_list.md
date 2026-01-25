In Rust, a constant list is a fixed-size array that cannot be modified. Once declared, a constant list is assigned a fixed size, and its elements can be only accessed and read, but not modified.

Here's an example of defining a constant list in Rust:

``` rust 
const NUMBERS: [i32; 5] = [1, 2, 3, 4, 5];
```

This defines a constant list named `NUMBERS` of type `[i32; 5]`, which means it is an array of 5 signed 32-bit integers. The `const` keyword tells Rust that this array is a constant, and cannot be modified. 

You can then use this constant list in your code for reading its elements. For example:

``` rust
let first_number = NUMBERS[0]; // 1
let second_number = NUMBERS[1]; // 2
```

You can also use a constant list in a function:

``` rust
const NUMBERS: [i32; 5] = [1, 2, 3, 4, 5];

fn main() {
    print_numbers(&NUMBERS);
}

fn print_numbers(numbers: &[i32; 5]) {
    for num in numbers.iter() {
        println!("{}", num);
    }
}
```

In this example, a constant list of numbers is defined outside the `main` function, and then passed as a reference to the `print_numbers` function. The `iter()` method is called on the reference to the array in order to iterate over and print each element of the array.

Overall, using constant lists in Rust can be a useful way to define and use fixed-size arrays that should not be modified.