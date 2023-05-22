In Dart, `unless` is a way to execute a block of code when a specified condition is `false`. 

The generic syntax of using `unless` in Dart is:

```
unless(condition, () { 
  // code to be executed if the condition is false 
});
```

For example:

```
int a = 5;
unless (a < 4, () {
  print('a is greater than or equal to 4');
});
```

In this example, the block of code inside the `unless` statement will only be executed if the value of `a` is not less than 4. Since `a` is equal to 5 which is not less than 4, the code inside the `unless` statement will execute and the output will be:

```
a is greater than or equal to 4
```

Another example can be used to print numbers that are not odd:

```
List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var num in numbers) {
  unless(num % 2 != 0, () {
    print('$num is even');
  });
}
```

This code will iterate through the list of numbers and print the numbers that are even. The condition to print the number is `num % 2 != 0`, which is false for even numbers. Therefore, the `unless` statement will print the numbers that are even, and the output will be:

```
2 is even
4 is even
6 is even
8 is even
10 is even
```