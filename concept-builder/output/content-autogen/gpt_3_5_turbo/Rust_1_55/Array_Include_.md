In Rust 1.55, you can check if an array includes an element using the `contains` method. 

Here is an example:

```rust
let arr = [1, 2, 3, 4, 5];

if arr.contains(&3) {
    println!("The array contains the number 3!");
} else {
    println!("The array does not contain the number 3.");
}
```

In this example, we have an array called `arr` containing the numbers 1 through 5. We use the `contains` method to check if the array contains the number 3. Since the array does contain the number 3, the first branch of the `if` statement is executed and "The array contains the number 3!" is printed to the console.

Note that the argument passed to `contains` is a reference to the element being searched for (`&3` in our example). This is because the elements in the array are not moved in or out of the array during the search.