Block binding in Swift is used to declare a constant or a variable in a specific scope. It allows you to limit the scope of a constant or variable so that it can only be accessed within a particular section of code.

Here is an example of using block binding with a constant:

```swift
func printMessage() {
    let message = "Hello World!"
    print(message)
}
printMessage()   // Output: "Hello World!"
print(message)    // Throws an error since message cannot be accessed outside of the function's scope
```

In this example, the constant `message` is only accessible within the `printMessage()` function.

Here is an example of using block binding with a variable:

```swift
func increaseCount() {
    var count = 0
    count += 1
    print("Count: \(count)")
}
increaseCount()   // Output: "Count: 1"
increaseCount()   // Output: "Count: 1"
```

In this example, the variable `count` is only accessible within the `increaseCount()` function. Every time the function is called, a new instance of the variable `count` is created and initialized to 0.

Block binding can also be used with control flow statements in Swift such as `if`, `for`, and `while` loops. Here is an example using block binding with a `for` loop:

```swift
let numbers = [1, 2, 3, 4, 5]
var sum = 0
for num in numbers {
    sum += num
}
print("Sum: \(sum)")   // Output: "Sum: 15"
```

In this example, the variable `num` is only accessible within the scope of the `for` loop. It is initialized to the value of the current element in the `numbers` array during each iteration of the loop.