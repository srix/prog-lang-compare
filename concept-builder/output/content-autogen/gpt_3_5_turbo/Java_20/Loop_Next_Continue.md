In Java, we use `next` and `continue` statements for controlling the flow of loops. `next` is used to skip an iteration while `continue` is used to stop current iteration and go to the next iteration. Here are some examples:

Using `next`:

```
for (int i=0; i<10; i++) {
  if (i == 3) {
    continue; // skip this iteration
  }
  System.out.println(i);
}
```

In this example, the loop will print the values of `i` from 0 to 9, except for 3, because when the value of `i` is 3, the `continue` statement will be executed, therefore skipping that iteration and moving on to the next.

Using `continue`:

```
int[] numbers = {1, 2, 3, 4, 5};
for (int number: numbers) {
  if (number % 2 == 0) {
    continue; // skip even numbers
  }
  System.out.println(number);
}
```

In this example, the loop will print all numbers in the array except for the even numbers (i.e. 2 and 4), because when the `number` is even, the `continue` statement will be executed, therefore skipping that number and moving on to the next.