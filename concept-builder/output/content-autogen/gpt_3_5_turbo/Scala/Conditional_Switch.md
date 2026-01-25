In Scala, the `switch` statement is replaced by the `match` expression. 

Here is an example of using `match` to replace a simple `switch` statement:

```
val input = "red"

val color = input match {
  case "red" => "Stop"
  case "yellow" => "Caution"
  case "green" => "Go"
  case _ => "Unknown"
}

println(color)
```

In this example, we create a variable `input` and set it to `"red"`. We then use the `match` expression to check the value of `input` and assign a string to the `color` variable based on the value of `input`. If `input` is `"red"`, the string `"Stop"` is assigned to `color`. If `input` is `"yellow"`, `"Caution"` is assigned to `color`. If `input` is `"green"`, `"Go"` is assigned to `color`. Finally, if `input` is any other value, `"Unknown"` is assigned to `color`.

Here is another more complex example of using `match`:

```
val input = 3

val result = input match {
  case 1 => "One"
  case 2 => "Two"
  case x if x % 2 == 0 => "Even"
  case _ => "Odd"
}

println(result)
```

In this example, we are checking the value of `input` and returning different strings based on the value. If `input` is `1`, `"One"` is returned. If `input` is `2`, `"Two"` is returned. If `input` is even (checked using the pattern `x if x % 2 == 0`), `"Even"` is returned. Finally, if `input` is any other value (i.e. odd), `"Odd"` is returned.

Note that unlike the `switch` statement in Java, `match` expressions in Scala are not limited to checking integer or character values. They can also be used to check the type of a value, the structure of a list or tuple, or any other pattern that can be specified.