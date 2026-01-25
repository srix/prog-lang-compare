In Rust, the `for` loop is used to iterate over collections and ranges. The loop variable takes on the value of each element in the collection or each value in the range for each iteration of the loop. The `step` argument is used to define a specific step size for the loop.

Here's an example of using `for` with a step in Rust 1.55:

```
// iterate over a range with a step of 2
for i in (0..10).step_by(2) {
    println!("{}", i);
}
```

This will output:

```
0
2
4
6
8
```

In this example, we are creating a range from `0` to `9` (`0..10`) and setting a step size of `2` using the `step_by` method. Then we are using the `for` loop to iterate over the range, with the loop variable `i` taking on the value of each element in the range for each iteration of the loop.

Another example of using `for` with a step in Rust 1.55 is with an array or vector:

```
// iterate over an array with a step of 2
let arr = [10, 20, 30, 40, 50, 60];
for i in (0..arr.len()).step_by(2) {
    println!("{}", arr[i]);
}
```

This will output:

```
10
30
50
```

In this example, we are using the `step_by` method to set a step size of `2` for the loop variable `i`. We are also using the `len` method to get the length of the array, which we are using as the upper bound for the loop range `(0..arr.len())`. Then for each iteration of the loop, we are printing out the element at index `i` from the array.