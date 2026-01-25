In R, the operators "and" and "or" are represented as "&" and "|", respectively. Here are some examples to demonstrate their usage:

1. "and" operator:

```
a <- 5
b <- 7

# Check if a is greater than 4 and b is less than 8
if (a > 4 & b < 8) {
  print("Both conditions are true")
} else {
  print("At least one of the conditions is false")
}
```

Output: "Both conditions are true"

In the above example, the condition inside the if statement is true only when both a is greater than 4 and b is less than 8. If either or both of these conditions are false, the else statement is executed.

2. "or" operator:

```
x <- 10
y <- 3

# Check if x is less than 5 or y is greater than 2
if (x < 5 | y > 2) {
  print("At least one of the conditions is true")
} else {
  print("Both conditions are false")
}
```

Output: "At least one of the conditions is true"

In the above example, the condition inside the if statement is true when either x is less than 5 or y is greater than 2, or both. If both of these conditions are false, the else statement is executed.