In Swift, we can assign a value to a variable if it doesn't exist using the nil-coalescing operator (??). Here's an example:

```swift
var value: Int?  // the value variable does not have a value assigned to it yet

let defaultValue = 0  // a default value we can assign if value is nil

value = value ?? defaultValue  // if value is nil, assign defaultValue to it

print(value)  // output: 0 since value was previously nil and defaultValue was assigned to it
```

In this example, we declare a variable `value` without assigning a value to it. Then we define a `defaultValue` that we want to assign to `value` if it is nil. The line `value = value ?? defaultValue` uses the nil-coalescing operator to assign `defaultValue` to `value` if `value` is nil. Finally, we print out `value` to ensure it has been assigned the correct value.

Keep in mind that `??` can only be used with optionals. If you try to apply it to a non-optional variable, you'll get a compiler error.