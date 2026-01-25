In Swift, the "not" operator is represented by the exclamation mark (`!`). It is used to revert the boolean value of a condition. For example:

```
let isRaining = false
if !isRaining {
   print("It's not raining.")
}
```

In the above code, the `!isRaining` condition evaluates to `true` because `isRaining` is `false`, so the code inside the `if` statement is executed.

Here's another example:

```
let age = 20
if !(age > 18) {
   print("You are not an adult.")
}
```

In the above code, the `!(age > 18)` condition evaluates to `false` because `age > 18` is `true`, so the code inside the `if` statement is not executed.

Basically, you use `!` in Swift to negate the value of a boolean expression.