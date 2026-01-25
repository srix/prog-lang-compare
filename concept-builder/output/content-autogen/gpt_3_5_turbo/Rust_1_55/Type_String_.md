In Rust, there are a few ways to check if a string is a number. Here are two methods:

Method 1: Using the parse() function

The simplest method to check if a string is a number is to attempt to parse it as a number using the parse() function. If the parse() function returns a Result type of Ok, then the string is a number. Otherwise, an error occurred and the string is not a number.

Here's an example code snippet that shows how to use this method:

```
fn is_number(str: &str) -> bool {
    str.parse::<f64>().is_ok()
}

fn main() {
    let input_one = "123.45";
    let input_two = "not a number";

    assert_eq!(is_number(input_one), true);
    assert_eq!(is_number(input_two), false);
}
```

In the above code, we define a function `is_number()` that takes a string input and returns a boolean. The function attempts to parse the string as a 64-bit floating point number using the `f64` type. If the parse is successful, the function returns true. Otherwise, it returns false.

Method 2: Using Regular expressions

Another way to check if a string is a number in Rust is to use regular expressions. We can use the regex crate in Rust to implement this method. Here's an example code snippet that shows how to use this method:

```
use regex::Regex;

fn is_number(str: &str) -> bool {
    let re = Regex::new(r"^-?\d+(?:\.\d+)?$").unwrap();
    re.is_match(str)
}

fn main() {
    let input_one = "123.45";
    let input_two = "not a number";

    assert_eq!(is_number(input_one), true);
    assert_eq!(is_number(input_two), false);
}
```

In the above code, we define a function `is_number()` that takes a string input and returns a boolean. The function creates a regular expression pattern that matches a number. If the input string matches the pattern, the function returns true. Otherwise, it returns false.

Both methods are effective ways to check if a string is a number in Rust.