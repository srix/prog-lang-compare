In R, the while loop allows you to execute a set of statements as long as a condition is true. The general syntax of the while loop is:

```
while(condition){
  //statements
}
```

Here, the statements inside the loop will be executed repeatedly as long the condition remains true. Once the condition becomes false, the loop is exited.

For example, let's say you want to print numbers from 1 to 5 using while loop:

```
num = 1
while(num <= 5){
  print(num)
  num = num + 1
}
```

Output:
```
[1] 1
[1] 2
[1] 3
[1] 4
[1] 5
```

In the above example, the loop will continue to execute as long as the value of `num` is less or equal to 5. The `print()` statement inside the loop will print the value of `num` on each iteration. 

Another example could be a while loop that calculates the factorial of a number:

```
num = 5
fact = 1
while(num > 0){
  fact = fact * num
  num = num - 1
}
cat("Factorial =", fact)
```

Output:
```
Factorial = 120
```

In this example, the loop will continue to execute as long as the value of `num` is greater than 0. The variable `fact` is multiplied with the value of `num` in each iteration to calculate the factorial. Once the loop exits, `cat()` is used to print the final factorial value.