In Rust 1.55, you can use the `fold()` method to reduce an array to a single value. 

The `fold()` method applies a given closure to each element of the array and accumulates the results into a single value. The closure takes two arguments: an accumulator value and an element value, and returns a new accumulator value. 

Here is an example of how to use `fold()` to calculate the sum of an array of numbers:

```
let array = [1, 2, 3, 4, 5];

let sum = array.iter().fold(0, |acc, &x| acc + x);

println!("The sum is {}", sum); // Output: The sum is 15
```

In this example, we start with an accumulator value of 0 and iterate over each element of the array. For each element, we add its value to the accumulator. 

You can also use `fold()` with more complex operations. For example, here is an example of how to use `fold()` to calculate the factorial of a number:

```
fn factorial(n: u32) -> u32 {
    (1..=n).fold(1, |acc, x| acc * x)
}

println!("The factorial of 5 is {}", factorial(5)); // Output: The factorial of 5 is 120
```

In this example, we create a function called `factorial` that takes a `u32` value and returns its factorial. We use `fold()` to accumulate the product of each number in the range from 1 to `n`. We start with an accumulator value of 1 and multiply it with each number in the range using the closure.