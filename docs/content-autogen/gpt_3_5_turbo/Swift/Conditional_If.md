In Swift, `if` is a conditional statement used for making decisions in our code based on a given condition. Here's the basic structure of an `if` statement in Swift:

```
if condition {
    // execute if condition is true
} else {
    // execute if condition is false
}
```

Let's say we want to write code that prints "Hello, world!" if a given number is greater than 10. We can use an `if` statement to make that decision. Here's an example:

```swift
let num = 12

if num > 10 {
    print("Hello, world!")
}
```

In this case, `num > 10` is the condition we're checking. If it's true (which it is) then the code inside the `if` statement will be executed and "Hello, world!" will be printed to the console.

We can also use `if` statements in combination with `else` to execute different code depending on whether the condition is true or false. Let's say we want to print "Hello, world!" if a given number is greater than 10, and "Goodbye, world!" if it's not. We can do that like this:

```swift
let num = 5

if num > 10 {
    print("Hello, world!")
} else {
    print("Goodbye, world!")
}
```

Since `num` is less than 10 in this case, the code inside the `else` block will be executed and "Goodbye, world!" will be printed to the console instead.