In Go, the break statement is used to exit the loop immediately. It is commonly used in for loops and switch statements.

Here are a few examples of using the break statement in Go:

Example 1: Using break in a for loop

```
for i := 0; i < 10; i++ {
  if i == 5 {
    break
  }
  fmt.Println(i)
}
```

In the above example, the loop is iterating from 0 to 10. When i becomes equal to 5, the break statement is executed, and the loop immediately exits. Therefore, only the numbers from 0 to 4 are printed.

Example 2: Using break in a switch statement

```
switch num {
  case 1:
    fmt.Println("One")
    break
  case 2:
    fmt.Println("Two")
    break
  case 3:
    fmt.Println("Three")
    break
  default:
    fmt.Println("Unknown number")
}
```

In the above example, the switch statement checks the value of the variable num. If num is 1, then "One" is printed, and the break statement is executed, causing the switch statement to exit. Similarly, if num is 2, "Two" is printed, and if num is 3, "Three" is printed. If none of these conditions are met, then "Unknown number" is printed.

In both examples, the break statement is used to immediately exit the loop or switch statement, thus preventing any further execution of that block of code.