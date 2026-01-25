Regex (regular expressions) is a powerful tool used for pattern matching and manipulating strings. It allows you to search, extract and replace specific parts of a string.

In Rust, the `regex` crate provides a comprehensive API for working with regular expressions. To use this crate, add the following to your `Cargo.toml` file:

```
[dependencies]
regex = "1.5.4"
```

Now, you can import the crate and start using its API. Here are some common examples of using regex in Rust.

**1. Creating a regex pattern:**

A regex pattern is a sequence of characters that define a search pattern. In Rust, we can create a regex pattern using the `regex::Regex::new` method, which takes a string that defines the pattern as an argument.

```rust
use regex::Regex;

fn main() {
    let pattern = Regex::new(r"\d+").unwrap();
}
```

In this example, we create a regex pattern that matches one or more digits.

**2. Searching for a match:**

Once we have a regex pattern, we can search for a match in a string using the `regex::Regex::is_match` method.

```rust
use regex::Regex;

fn main() {
    let pattern = Regex::new(r"\d+").unwrap();
    let text = "I have 2 apples and 3 bananas.";
    let has_match = pattern.is_match(text);
    println!("{}", has_match);
}
```

In this example, we search for the regex pattern in the `text` string and print whether a match was found or not.

**3. Extracting a match:**

We can also extract the first match that is found in a string using the `regex::Regex::find` method.

```rust
use regex::Regex;

fn main() {
    let pattern = Regex::new(r"\d+").unwrap();
    let text = "I have 2 apples and 3 bananas.";
    if let Some(matched) = pattern.find(text) {
        println!("{}", matched.as_str());
    }
}
```

In this example, we extract the first substring that matches the regex pattern and print it.

**4. Replacing matches:**

We can replace all matches of a regex pattern in a string using the `regex::Regex::replace_all` method.

```rust
use regex::Regex;

fn main() {
    let pattern = Regex::new(r"\d+").unwrap();
    let text = "I have 2 apples and 3 bananas.";
    let replaced = pattern.replace_all(text, "fruit");
    println!("{}", replaced);
}
```

In this example, we replace all substrings that match the regex pattern with the string "fruit" and print the modified string.

These are just some of the basic examples of using regex in Rust. The `regex` crate provides many more methods for working with regular expressions, including capturing groups and backreferences.