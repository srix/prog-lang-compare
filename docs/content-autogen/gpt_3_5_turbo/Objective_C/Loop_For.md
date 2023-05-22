In Objective-C, the `for` statement is used to create a loop that executes a block of code repeatedly while a condition is true. The basic syntax of a `for` loop in Objective-C is:

```
for (initialization; condition; increment) {
    // code to be executed while the condition is true
}
```

- `initialization` is the statement that initializes the loop counter variable.
- `condition` is the expression that is tested for truth or falsity. If this expression is true, the loop continues, and if it is false, the loop terminates.
- `increment` is the statement that increments or decrements the loop counter variable.

Here's an example of using a `for` loop in Objective-C to print the numbers from 1 to 10:

```
for (int i = 1; i <= 10; i++) {
    NSLog(@"%d", i);
}
```

This loop will execute 10 times, with the value of `i` starting at 1 and incrementing by 1 on each iteration. On each iteration, the value of `i` is printed to the console.

Another example is using a `for` loop to iterate through an array:

```
NSArray *fruits = @[@"apple", @"banana", @"orange", @"kiwi"];
for (int i = 0; i < [fruits count]; i++) {
    NSLog(@"%@", fruits[i]);
}
```

This loop will iterate through the `fruits` array and print each element to the console. The loop counter `i` is initialized to 0, and the loop continues while `i` is less than the number of items in the `fruits` array. On each iteration, the element at index `i` of the array is printed to the console using `NSLog()`.