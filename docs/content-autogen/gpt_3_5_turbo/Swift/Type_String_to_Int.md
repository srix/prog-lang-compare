In Swift, you can convert a string to an integer using the `Int()` initializer. Here are a few examples:

Example 1: Convert a string with a numeric value to an integer.

```
let str = "123"
let num = Int(str)
print(num)
```
Output:
```
Optional(123)
```

The `Int()` initializer returns an optional `Int` value because the conversion can fail if the string does not contain a valid numeric value. In this case, the conversion is successful and the output is `Optional(123)`.

Example 2: Convert a string with a non-numeric value to an integer.

```
let str = "abc"
let num = Int(str)
print(num)
```
Output:
```
nil
```

The `Int()` initializer returns `nil` if the string does not contain a valid numeric value. In this case, the output is `nil`.

Example 3: Convert a string with a numeric value and handle the optional output.

```
let str = "456"
if let num = Int(str) {
    print(num)
} else {
    print("Invalid number")
}
```
Output:
```
456
```

The `if let` statement is used to safely unwrap the optional `Int` value returned by the `Int()` initializer. If the conversion is successful, the unwrapped value is printed to the console. If the conversion fails, the else block is executed and prints "Invalid number".

Note that the `Int()` initializer can also be used to convert a string with a hexadecimal value to an integer by passing in a second argument of `radix: 16`. For example:

```
let str = "A"
let num = Int(str, radix: 16)
print(num)
```
Output:
```
Optional(10)
```