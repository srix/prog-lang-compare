In C++, the `for` loop is a control statement that loops a block of code for a specified number of times. 
The syntax of `for` loop is as follows:

```
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```

Here's an explanation of each part of the `for` loop syntax:
- `initialization`: This is a statement that is executed only once at the beginning of the loop. It typically initializes a counter variable.
- `condition`: This is a Boolean expression that is evaluated before each iteration. If it is true, the loop continues; if it is false, the loop terminates.
- `increment/decrement`: This is a statement that is executed at the end of each iteration. It typically increments or decrements the counter variable that was initialized in the first part of the `for` loop syntax.

Now let's look at some examples to understand how to use `for` in C++:

Example 1: Print numbers in a range
```
for (int i = 1; i <= 5; i++) {
  cout << i << " ";
}
```
Output: `1 2 3 4 5`

Explanation: In this example, `i` is initialized to 1, loop continues as long as i is less than or equal to 5, and `i` is incremented by 1 after each loop iteration. The loop body simply prints the value of `i`.

Example 2: Calculate the factorial of a number
```
int n = 5;
int factorial = 1;

for (int i = 1; i <= n; i++) {
  factorial *= i;
}
cout << "Factorial of " << n << " is: " << factorial;
```
Output: `Factorial of 5 is: 120`

Explanation: In this example, we are calculating the factorial of `n` using a `for` loop. The loop initializes `i` to 1, continues as long as `i` is less than or equal to `n`, and multiplies `factorial` by `i` at the end of each iteration. 

Example 3: Print odd numbers in a range
```
for (int i = 1; i <= 10; i++) {
  if(i % 2 != 0) {
    cout << i << " ";
  }
}
```
Output: `1 3 5 7 9`

Explanation: In this example, we are printing odd numbers between 1 and 10 using a `for` loop. The loop initializes `i` to 1, continues as long as `i` is less than or equal to 10, and checks if `i` is odd using the `%` operator. If `i` is odd, it is printed. If `i` is even, it is skipped.