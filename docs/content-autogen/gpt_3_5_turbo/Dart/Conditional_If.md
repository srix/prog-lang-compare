In Dart, we use `if` conditional statement to execute a block of code based on a particular condition. The general syntax of `if` statement is as follows:

```dart
if(condition){
  // code to execute if condition is true
}
```

Here is an example that shows how to use `if` statement to check if a number is greater than zero or not:

```dart
void main() {
  int num = 5;

  if (num > 0) {
    print('Number is positive');
  }
}
```

Output:

```
Number is positive
```

You can also use `if-else` statement in Dart to execute a different block of code if the condition is false. The syntax of the `if-else` statement is as follows:

```dart
if(condition){
  // code to execute if condition is true
} else{
  // code to execute if condition is false
}
```

Here is an example that shows how to use `if-else` statement to check if a number is positive or negative:

```dart
void main() {
  int num = -5;

  if (num > 0) {
    print('Number is positive');
  } else {
    print('Number is negative');
  }
}
```

Output:

```
Number is negative
```

You can also use `if-else if-else` statement to execute a different block of code based on multiple conditions. The syntax of the `if-else if-else` statement is as follows:

```dart
if(condition1){
  // code to execute if condition1 is true
} else if(condition2){
  // code to execute if condition1 is false and condition2 is true
} else{
  // code to execute if condition1 and condition2 are false
}
```

Here is an example that shows how to use `if-else if-else` statement to check if a number is positive, negative or zero:

```dart
void main() {
  int num = 0;

  if (num > 0) {
    print('Number is positive');
  } else if(num < 0) {
    print('Number is negative');
  } else {
    print('Number is zero');
  }
}
```

Output:

```
Number is zero
```