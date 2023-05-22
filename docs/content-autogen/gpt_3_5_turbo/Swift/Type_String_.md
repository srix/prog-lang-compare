In Swift, you can use the `Double()` initializer to check if a string represents a number. Here's an example:

```swift
let string1 = "123"
let string2 = "3.14"
let string3 = "hello"

if let number1 = Double(string1) {
    print("\(string1) is a number")
} else {
    print("\(string1) is not a number")
}

if let number2 = Double(string2) {
    print("\(string2) is a number")
} else {
    print("\(string2) is not a number")
}

if let number3 = Double(string3) {
    print("\(string3) is a number")
} else {
    print("\(string3) is not a number")
}
```

Output:
```
123 is a number
3.14 is a number
hello is not a number
```

In the example above, we use the `Double()` initializer to try to convert the string into a double-precision floating-point number. If the conversion is successful, we print a message saying that it's a number. Otherwise, we print a message saying that it's not a number.