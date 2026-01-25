In Go, an if/else statement is used to perform decision-making operations. It allows you to execute a block of code if a condition is true and another block if the condition is false.

The general syntax for if/else statement in Go is:

```
if condition {
   // code to execute when the condition is true
} else {
   // code to execute when the condition is false
}
```

Here, the condition is a boolean expression that evaluates to either true or false.

Let's look at some examples:

Example 1:
```
num := 10

if num%2 == 0 {
    fmt.Println("Number is even")
} else {
    fmt.Println("Number is odd")
}
```
In this example, we use the if/else statement to check whether a number is even or odd. If the condition `num%2 == 0` is true, it means that the number is even, and the code inside the if block is executed. Otherwise, the code inside the else block is executed.

Example 2:
```
age := 20

if age >= 18 {
    fmt.Println("You are an adult")
} else {
    fmt.Println("You are a minor")
}
```
In this example, we use the if/else statement to check if a person is an adult or a minor based on their age. If the age is greater than or equal to 18, it means that the person is an adult, and the code inside the if block is executed. Otherwise, the code inside the else block is executed.

Example 3:
```
num := 10

if num > 0 {
    fmt.Println("Positive number")
} else if num < 0 {
    fmt.Println("Negative number")
} else {
    fmt.Println("Number is zero")
}
```
In this example, we use the if/else if/else statement to check whether a number is positive, negative, or zero. If the condition `num > 0` is true, it means that the number is positive, and the code inside the if block is executed. If the condition `num < 0` is true, it means that the number is negative, and the code inside the else if block is executed. Otherwise, the code inside the else block is executed.

In conclusion, if/else statements in Go let you control the flow of your program based on specific conditions. You can use them to execute different blocks of code depending on whether a condition is true or false.