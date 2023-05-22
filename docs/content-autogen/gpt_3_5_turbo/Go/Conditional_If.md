In Go, if is the most basic conditional statement. Its syntax is as follows:

```
if condition {
  // do something
}
```

Here, the condition is any expression that evaluates to a boolean value (`true` or `false`). If the condition is true, then the code block within the curly braces is executed. If the condition is false, the code block is skipped.

Here is an example that uses if to test if a number is positive or negative:

```
package main

import "fmt"

func main() {
  number := 10
  if number > 0 {
    fmt.Println("The number is positive")
  } else {
    fmt.Println("The number is negative")
  }
}
```

In this example, the condition checks if the number variable is greater than 0. If it is, the first code block is executed and "The number is positive" is printed. If it is not, the second code block is executed and "The number is negative" is printed.

You can also use the if statement without an else section, like this:

```
package main

import "fmt"

func main() {
  name := "John"
  if name == "John" {
    fmt.Println("Hello John!")
  }
}
```

In this example, only the code block within the if statement is executed if the name variable is equal to "John".

Additionally, you can use multiple if statements, like this:

```
package main

import "fmt"

func main() {
  age := 18
  if age < 13 {
    fmt.Println("You are a child")
  } else if age < 18 {
    fmt.Println("You are a teenager")
  } else {
    fmt.Println("You are an adult")
  }
}
```

In this example, the if statement is used to test multiple conditions. If the age is less than 13, "You are a child" is printed. If the age is between 13 and 18 (exclusive), "You are a teenager" is printed. Otherwise, "You are an adult" is printed.