In C++, the while loop is used to repeatedly execute a block of code until a certain condition is met. The general syntax for the while loop is:

```
while (condition) {
   // code to be executed
}
```

Here, the condition is a Boolean expression that is evaluated before each iteration of the loop. If the condition evaluates to true, the code inside the brackets is executed. This continues until the condition evaluates to false.

Let's take an example to illustrate the use of the while loop in C++. Suppose we want to print the numbers from 1 to 10. We can use the while loop as follows:

```
int i = 1;
while (i <= 10) {
   cout << i << " ";
   i++;
}
```

In this example, we initialize a variable `i` to 1. The while loop then checks if `i` is less than or equal to 10. Since this is true, the code inside the brackets is executed. Here, we print the value of `i` followed by a space. We then increment the value of `i` by 1 using the `i++` operator. This process is repeated until `i` becomes greater than 10, at which point the while loop terminates.

Another example of using the while loop in C++ is to read input from the user until a certain condition is met. Suppose we want to read integers from the user until they enter a negative number. We can use the while loop as follows:

```
int num, sum = 0;
cout << "Enter a number: ";
cin >> num;

while (num >= 0) {
   sum += num;
   cout << "Enter another number: ";
   cin >> num;
}

cout << "The sum of the numbers entered is: " << sum << endl;
```

In this example, we first read an integer `num` from the user using `cin`. We then enter a while loop that checks if `num` is greater than or equal to 0. If it is, we add it to a variable `sum`, and continue reading more integers from the user. Once the user enters a negative number, the while loop terminates. We then print the value of `sum`.