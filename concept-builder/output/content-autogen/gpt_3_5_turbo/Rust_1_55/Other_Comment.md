In Rust, there are two types of comments: 

1. `//`: Used for single-line comments.
2. `/* */`: Used for multiline comments.

Here are some examples:

```rust
// This is a single-line comment.

fn main() {
    // This is a comment on a line with code.
    println!("Hello, world!"); // This is another comment on the same line as code.
}

/*
This is a
multiline comment 
that spans multiple lines.
*/

// The below code contains commented out code that is not executed:
/*
fn unused_function() {
    println!("This function is not used.");
}
*/
``` 

It's always a good practice to add comments within your code to explain the functionality of the code to yourself or others who may read your code in the future.