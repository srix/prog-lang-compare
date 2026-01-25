In Rust, strings are represented using the `String` type or the primitive `&str` type. There are several ways to compare strings in Rust.

Method 1: Using the `==` operator
The `==` operator can be used to compare two strings. This method checks if the content of the two strings are the same.

```rust
fn main() {
    let str1 = String::from("hello");
    let str2 = String::from("world");
    let str3 = String::from("hello");

    println!("str1 == str2 : {}", str1 == str2);
    println!("str1 == str3 : {}", str1 == str3);

    let str4 = "hello";
    let str5 = "world";
    let str6 = "hello";

    println!("str4 == str5 : {}", str4 == str5);
    println!("str4 == str6 : {}", str4 == str6);
}
```

Output:
```
str1 == str2 : false
str1 == str3 : true
str4 == str5 : false
str4 == str6 : true
```

Method 2: Using the `partial_cmp()` method
The `partial_cmp()` method can be used to compare two strings. This method returns an `Option<Ordering>` which indicates whether the first string is less than, equal to, or greater than the second string.

```rust
fn main() {
    let str1 = "hello";
    let str2 = "HELLO";

    match str1.partial_cmp(str2) {
        Some(ordering) => {
            if ordering == Ordering::Equal {
                println!("strings are equal");
            } else if ordering == Ordering::Less {
                println!("{} is less than {}", str1, str2);
            } else {
                println!("{} is greater than {}", str1, str2);
            }
        },
        None => {
            println!("strings cannot be compared");
        }
    }
}
```

Output:
```
hello is greater than HELLO
```

Note that this method is case-sensitive.

Method 3: Using the `eq_ignore_ascii_case()` method
The `eq_ignore_ascii_case()` method can be used to compare two strings in a case-insensitive manner.

```rust
fn main() {
    let str1 = "hello";
    let str2 = "HELLO";

    if str1.eq_ignore_ascii_case(str2) {
        println!("strings are equal");
    } else {
        println!("strings are not equal");
    }
}
```

Output:
```
strings are equal
```

This method ignores ASCII case.