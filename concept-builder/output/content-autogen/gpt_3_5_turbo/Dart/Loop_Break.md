In Dart, `break` is a keyword used to exit out of a loop or switch statement. It causes the control of the program to exit the loop or switch statement and continue executing the code that follows. Here are a few examples:

1. Example of using `break` inside a for loop:

```dart
void main() {
  for (var i = 1; i <= 10; i++) {
    if (i == 5) {
      break;
    }
    print(i);
  }
  print('Loop finished');
}
```

Output:

```
1
2
3
4
Loop finished
```

In the above example, the `break` statement is executed when `i` becomes `5`, which causes the loop to exit immediately. As a result, the program prints numbers `1` through `4` only.

2. Example of using `break` inside a while loop:

```dart
void main() {
  var i = 1;
  while (i <= 10) {
    if (i == 5) {
      break;
    }
    print(i);
    i++;
  }
  print('Loop finished');
}
```

Output:

```
1
2
3
4
Loop finished
```

In this example, we use a `while` loop instead of a `for` loop. The output is the same as before because we use the `break` statement to exit the loop when `i` becomes `5`.

3. Example of using `break` inside a switch statement:

```dart
void main() {
  var grade = 'A';
  switch (grade) {
    case 'A':
      print('Excellent!');
      break;
    case 'B':
      print('Good!');
      break;
    default:
      print('Invalid!');
      break;
  }
}
```

Output:

```
Excellent!
```

In this example, the `switch` statement checks the value of the `grade` variable and executes the code associated with the matching case. In this case, because `grade` is `'A'`, the code associated with the `'A'` case is executed, which prints `'Excellent!'`. After that, the `break` statement causes the control to exit the switch statement and continue executing the code that follows.