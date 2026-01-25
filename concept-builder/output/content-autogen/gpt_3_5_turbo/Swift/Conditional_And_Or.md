In Swift, the `&&` (logical AND) and `||` (logical OR) operators are used to combine multiple `Boolean` expressions together. If you want to check whether two or more conditions are true or false at the same time, you can use the `&&` and `||` operators respectively.

Here's an example of using the `&&` (logical AND) operator:

```swift
let number = 5

if number > 0 && number < 10 {
    print("The number is between 0 and 10")
} else {
    print("The number is not between 0 and 10")
}
```

In this example, the `if` statement first checks whether `number` is greater than 0 (`number > 0`) and then checks whether `number` is less than 10 (`number < 10`). Since both conditions are true, it prints "The number is between 0 and 10".

Next, here's an example of using the `||` (logical OR) operator:

```swift
let fruit = "apple"

if fruit == "apple" || fruit == "orange" {
    print("This is a fruit that I like")
} else {
    print("This is not a fruit that I like")
}
```

In this example, the `if` statement checks whether `fruit` is equal to "apple" (`fruit == "apple"`) OR (`||`) `fruit` is equal to "orange" (`fruit == "orange"`). Since the first condition is true, it prints "This is a fruit that I like".

Using `&&` and `||` operators in Swift can help you write code that evaluates multiple conditions and help you make decisions accordingly.