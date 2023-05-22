In Dart, the `for` loop is used to execute a set of statements repeatedly, based on the number of times it is specified. The `for` loop has 3 parts separated by semicolons:

1. Initialization: Initializes the loop counter variable.
2. Condition: Defines the condition for execution of statements inside the loop.
3. Increment/Decrement: Increases or decreases the loop counter variable.

A `step` in a `for` loop refers to the change in the loop counter variable on each iteration.

Here's an example of using step in a `for` loop in Dart. This loop prints odd numbers from 1 to 10:

```
for (int i = 1; i <= 10; i += 2) {
  print(i);
}
```

In this example, the `i` variable is initialized to 1, and then iterates until it is equal to or greater than 10. On each iteration, the `i` variable is increased by 2 using the `i += 2` syntax. This means that the loop only prints odd numbers from 1 to 10.

Another example of using `for` loop with step can be to print the multiples of a given number:

```
int num = 3; // print multiples of 3
for (int i = 1; i <= 10; i++) {
  int multiple = num * i;
  print(multiple);
}
```

In this example, the loop initializes the `i` variable to 1 and iterates until it is equal to or greater than 10. On each iteration, it calculates the `multiple` of `num` by multiplying it with `i`. The loop then prints this `multiple`. The output will be the multiples of 3 - 3, 6, 9, 12, 15, 18, 21, 24, 27 and 30.