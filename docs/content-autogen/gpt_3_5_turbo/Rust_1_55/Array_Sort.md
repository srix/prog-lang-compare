In Rust 1.55, you can sort an array using the `sort()` method. Here is an example:

```
fn main() {
    let mut arr = [3, 5, 1, 2, 4];
    arr.sort();

    println!("{:?}", arr);
}
```

In this example, we define an array `arr` with five integers. Then, we call the `sort()` method on `arr` to sort it in ascending order. Finally, we print the sorted array using `println!()`.

Output:

```
[1, 2, 3, 4, 5]
```

You can also use the `sort_by()` method to sort an array by a custom sorting function. Here is an example:

```
fn main() {
    let mut arr = ["apple", "banana", "cherry", "date", "elderberry"];
    arr.sort_by(|a, b| a.len().cmp(&b.len()));

    println!("{:?}", arr);
}
```

In this example, we define an array `arr` with five strings. Then, we call the `sort_by()` method on `arr` and pass a closure as an argument that compares the length of two strings. The `cmp()` method is used to compare the length of the strings.

Output:

```
["date", "apple", "cherry", "banana", "elderberry"]
```