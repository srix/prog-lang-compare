In Swift, the ternary operator `? :` is a shorthand way of writing an if-else statement. It's usually used for simple checks and simple operations. The basic syntax of the ternary operator is `condition ? true expression : false expression`.

Here's an example:

```swift
let age = 18
let status: String

if age >= 18 {
    status = "adult"
} else {
    status = "minor"
}
```

This code can be simplified using the ternary operator:

```swift
let age = 18
let status = age >= 18 ? "adult" : "minor"
```

Another example could be checking if a variable is nil:

```swift
let name: String? = "John"
let greeting = "Hello, " + (name ?? "anonymous user") + "!"
```

Here, if `name` is not nil, `greeting` will be "Hello, John!". If `name` is nil, the ternary operator `??` will provide the default value "anonymous user". Thus, `greeting` will be "Hello, anonymous user!".

In summary, the ternary operator `? :` is a useful shorthand for simple if-else statements in Swift.