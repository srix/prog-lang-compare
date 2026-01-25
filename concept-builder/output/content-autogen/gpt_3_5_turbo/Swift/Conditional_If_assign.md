In Swift programming language, `if let` and `if var` statements are used to safely unwrap optional values. These statements are conditional and will only execute the code inside the curly braces `{}` if the optional value is not `nil`. Here are some examples of using `if let` and `if var` to assign optional values:

### Using `if let` statement

```
let optionalName: String? = "John Doe"
if let name = optionalName {
    print("Hello \(name)")
} else {
    print("Name is nil")
}

/* Output:
Hello John Doe
*/
```

In the above example, the optionalName variable is assigned a non-nil value "John Doe". The `if let` statement safely unwraps the optionalName variable and assigns its value to the `name` constant. The `print` statement inside the curly braces is executed since the optionalName variable is not `nil`.

### Using `if var` statement

```
var optionalGreeting: String? = nil
if var greeting = optionalGreeting {
    greeting = "Hello"
    print(greeting)
} else {
    print("Greeting is nil")
}

/* Output:
Greeting is nil
*/
```

In the above example, the optionalGreeting variable is assigned a `nil` value. The `if var` statement safely attempts to unwrap the optionalGreeting variable and assigns its value to the `greeting` variable (which is a mutable `var`). However, since the optionalGreeting variable is `nil`, the `else` block is executed and prints "Greeting is nil".