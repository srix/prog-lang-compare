To split a string in Rust 1.55, you can use the `split` method of the `str` type. The `split` method takes a delimiter as an argument and returns an iterator that produces the substrings between the delimiters.

Here is an example code snippet that shows how to split a string on a space delimiter:

```rust
fn main() {
    let my_string = "Hello World";
    let tokens: Vec<&str> = my_string.split(" ").collect();
    println!("{:?}", tokens);
}
```

In this example, the `split` method is called on the `my_string` variable with a space delimiter as an argument. The `collect` method is then called on the iterator that is returned by `split` to collect the substrings into a `Vec<&str>`.

The resulting `Vec` contains two elements: `"Hello"` and `"World"`, which are the substrings between the space delimiter.

You can also use other delimiters like commas or semicolons:

```rust
fn main() {
    let my_string = "apple,banana,kiwi";
    let tokens: Vec<&str> = my_string.split(",").collect();
    println!("{:?}", tokens);
}
```

This code snippet splits the string on commas and produces a `Vec` with three elements: `"apple"`, `"banana"`, and `"kiwi"`.