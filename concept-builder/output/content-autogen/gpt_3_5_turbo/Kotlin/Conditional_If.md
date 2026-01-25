In Kotlin, the `if` expression is similar to other programming languages. It allows us to execute a block of code based on a given condition. 

Here's how you can use `if` in Kotlin:

1. Simple If Statement: 
```
if (a < b) {
        println("$a is less than $b")
    }
```
Here, the block of code inside the `if` statement will only execute if the condition, `a < b`, is true.

2. If Else Statement:
```
if (a < b) {
        println("$a is less than $b")
    } else {
        println("$a is greater than or equal to $b")
    }
```
In this example, if the condition is true, the first block of code is executed, else the code inside else block is executed.

3. If Else If Ladder:
```
if (a < b) {
        println("$a is less than $b")
    } else if (a > b) {
        println("$a is greater than $b")
    } else {
        println("$a is equal to $b")
    }
```
This is useful when there are multiple conditions to check. In this example, if first condition is true, the first block of code is executed, else the second condition is checked. If that is true, the second block of code is executed. If both conditions are false, the last else block will be executed.

4. Ternary Operator:
```
val result = if (a < b) "yes" else "no"
```
Here, we assign the value of `result` based on the condition in the `if` statement. If the condition is true, the value "yes" is assigned, else "no" is assigned.

These are some simple examples of how to use `if` statement in Kotlin.