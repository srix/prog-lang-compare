In Rust, `for` is used to perform iteration over a range or collection of items. The syntax for using `for` loop is as follows: 

```rust
for variable in iterator {
    // statements to be executed for each item in the iterator
}
```

Here, `variable` is a new variable that will be created for each iteration of the loop, and `iterator` is something that can be iterated over, such as a vector or range.

Example 1: Iterate over a collection of items 

```rust
let names = vec!["Alice", "Bob", "Charlie"];
for name in names {
    println!("Hello, {}!", name);
}
```

Output:

```
Hello, Alice!
Hello, Bob!
Hello, Charlie!
```

Example 2: Iterate over a range of numbers

```rust
for i in 0..5 {
    println!("{}", i);
}
```

Output:
```
0
1
2
3
4
```

Example 3: Iterate over a string

```rust
let message = "Hello, world!";
for c in message.chars() {
    println!("{}", c);
}
```

Output:
```
H
e
l
l
o
,
 
w
o
r
l
d
!
``` 

Note: `chars()` is used to iterate over individual characters of the string. Similarly, `bytes()` can be used to iterate over individual bytes of a string.