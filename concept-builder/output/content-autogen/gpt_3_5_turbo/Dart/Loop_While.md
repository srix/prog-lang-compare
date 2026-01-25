In Dart, `while` is a loop statement used to execute a block of code repeatedly while a specified condition is true. Here is the syntax for a `while` loop:

```
while (condition) {
  // code to be executed repeatedly
}
```

The condition is evaluated at the beginning of each iteration. If the condition is true, the code within the loop is executed. This repeats until the condition becomes false, at which point the loop is exited and control is passed to the next statement after the loop.

Here are some examples of how to use `while` in Dart:

##### Example 1:
This program uses a `while` loop to print the numbers 1 to 5:

```
void main() {
  int i = 1;
  while (i <= 5) {
    print(i);
    i++;
  }
}
```

Output:
```
1
2
3
4
5
```

##### Example 2:
This program uses a `while` loop to find the sum of the first 10 natural numbers:

```
void main() {
  int i = 1;
  int sum = 0;
  while (i <= 10) {
    sum += i;
    i++;
  }
  print('Sum of first 10 natural numbers: $sum');
}
```

Output:
```
Sum of first 10 natural numbers: 55
```

##### Example 3:
This program uses a `while` loop to repeatedly prompt the user for a number until a negative number is entered:

```
import 'dart:io';

void main() {
  int num;
  do {
    print('Enter a number:');
    num = int.parse(stdin.readLineSync());
  } while (num >= 0);
  print('Negative number entered. Terminating program...');
}
```

In this example, we use a `do-while` loop instead of a `while` loop, which means the loop will always execute at least once. The loop continues to execute as long as the user enters a non-negative number.

Output:
```
Enter a number:
5
Enter a number:
3
Enter a number:
-1
Negative number entered. Terminating program...
```