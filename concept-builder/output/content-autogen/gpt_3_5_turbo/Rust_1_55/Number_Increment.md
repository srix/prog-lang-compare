In Rust 1.55, we can use the increment operator `+=` to increment a number. 

Here's an example:

```
fn main() {
    let mut num = 5;
    num += 1;
    println!("After increment, num is {}", num);
}
```

In this example, we first initialize a mutable variable `num` to 5. We then use the `+=` operator to increment `num` by 1. Finally, we print the resulting value of `num` using `println!`.

Another example:

```
fn main() {
    let mut count = 0;
    for i in 0..5 {
        count += 1;
        println!("Count is now {}", count);
    }
}
```

In this example, we use a `for` loop to iterate over the values in a range from 0 to 4. In each iteration of the loop, we increment the mutable variable `count` using `+=`, and then print out its value. 

The output of this program will be:

```
Count is now 1
Count is now 2
Count is now 3
Count is now 4
Count is now 5
``` 

This shows how the increment operator can be used to update a variable's value repeatedly in a loop.