In Swift, a switch statement is a control flow statement that provides a way to execute different code blocks based on the matching value of a condition. The syntax of a switch statement is as follows:

```
switch value {
case pattern 1:
    code to execute if value matches pattern 1
case pattern 2:
    code to execute if value matches pattern 2
...
case pattern n:
    code to execute if value matches pattern n
default:
    code to execute if value doesn't match any of the patterns
}
```

Here, `value` can be any variable or expression of a type that supports the `==` operator. The patterns are a way of testing the value for equality, and can be any of the following types:

- Literal values, such as `1`, `"hello"`, `true`, etc.
- Range expressions, such as `1...10`, `..<5`, etc.
- Tuple patterns, which match multiple values at once.

Example of using a switch statement:

```
let dayOfWeek = "Monday"

switch dayOfWeek {
case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday":
    print("It's a weekday.")
case "Saturday", "Sunday":
    print("It's a weekend.")
default:
    print("Invalid day of the week.")
}
```

In this example, we are using a switch statement to test the value of `dayOfWeek`. If it matches any of the strings `"Monday"`, `"Tuesday"`, `"Wednesday"`, `"Thursday"`, or `"Friday"`, then it prints the message "It's a weekday." Similarly, if it matches `"Saturday"` or `"Sunday"`, then it prints "It's a weekend." If it doesn't match any of these patterns, then it prints "Invalid day of the week."

Another example of using a switch statement with a range expression:

```
let age = 25

switch age {
case 0..<18:
    print("You're too young.")
case 18...65:
    print("You're in your prime.")
case 66...:
    print("You're a wise elder.")
default:
    print("Invalid age.")
}
```

In this example, we are using a switch statement to test the value of `age`. If it is less than 18, then it prints "You're too young." If it is between 18 and 65 (inclusive), then it prints "You're in your prime." If it is 66 or greater, then it prints "You're a wise elder." If it doesn't match any of these ranges, then it prints "Invalid age."