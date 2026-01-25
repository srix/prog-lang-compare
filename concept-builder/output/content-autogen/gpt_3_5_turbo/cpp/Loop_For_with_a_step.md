In C++, the for loop is used to execute a block of code repeatedly for a fixed number of times. We can also use the for loop to iterate over an array or collection like vectors. The syntax of the for loop with a step is as follows:

```c++
for (initialization; condition; increment/decrement) {
   // code to be executed repeatedly
}
```

The "initialization" step is used to initialize the loop counter variable, "condition" is used to specify the condition for the loop execution, and "increment/decrement" is used to update the loop counter variable.

For example, let's say we want to print the numbers from 1 to 10 with a step of 2. We can use the following code:

```c++
for (int i = 1; i <= 10; i += 2) {
   cout << i << " ";
}
```

Output: `1 3 5 7 9`

In this example, we initialize the loop counter variable "i" to 1, specify the condition that "i" should be less than or equal to 10, and increment "i" by 2 on each iteration.

We can also use the for loop with a step to iterate over an array or collection like vectors. For example, let's say we have an array "arr" of integers, and we want to print all the elements of the array with a step of 2. We can use the following code:

```c++
int arr[] = {1, 2, 3, 4, 5};
for (int i = 0; i < 5; i += 2) {
   cout << arr[i] << " ";
}
```

Output: `1 3 5`

In this example, we initialize the loop counter variable "i" to 0, specify the condition that "i" should be less than 5, and increment "i" by 2 on each iteration. Inside the loop, we access the i-th element of the array "arr" and print it to the console.