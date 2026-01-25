In Swift, "unless" is not a built-in keyword or operator. But you can use an if-statement with a "not" operator to achieve the same effect. 

Here's an example: 

```
let hasMoney = false

if !hasMoney {
   print("You can't buy this item unless you have money.")
}
```

In this example, the if statement checks for the opposite of the value of `hasMoney` since we used the not operator `!`. The code inside the if statement will only be executed if `hasMoney` is false.

Here's another example that uses a function that returns a Boolean value:

```
func isAuthorized(user: String) -> Bool {
   return false
}

let userName = "John"

if !isAuthorized(user: userName) {
   print("\(userName) is not authorized to access this feature unless they log in.")
}
```

This example shows how to use an if statement with a function that returns a Boolean value. The if statement first uses the not operator to check if the function returns false. If the function returns false, the code inside the if statement will be executed.

So, while "unless" is not a direct keyword or operator in Swift, you can still achieve the same effect using an if-statement with a "not" operator.