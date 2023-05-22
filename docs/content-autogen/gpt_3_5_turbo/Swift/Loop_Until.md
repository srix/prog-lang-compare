In Swift, the `until` keyword is not used as it is not a reserved keyword in the language. However, the `while` keyword can be used in combination with a `not` operator to achieve the same functionality as `until` in other programming languages.

Here's an example of how to use `while` and `not` to achieve an "until" loop in Swift:

```
var i = 0

while !(i == 5) {
    print("i is not 5 yet, it is currently \(i)")
    i += 1
}

// Output:
// i is not 5 yet, it is currently 0
// i is not 5 yet, it is currently 1
// i is not 5 yet, it is currently 2
// i is not 5 yet, it is currently 3
// i is not 5 yet, it is currently 4
```

In the example above, we initialize `i` to 0 and then enter a `while` loop. The condition for the loop is `!(i == 5)`, which means "execute the loop while i is not equal to 5". Within the loop, we print out the current value of `i` and increment it by 1. The loop continues until `i` reaches 5, at which point the condition is no longer true and the loop ends.