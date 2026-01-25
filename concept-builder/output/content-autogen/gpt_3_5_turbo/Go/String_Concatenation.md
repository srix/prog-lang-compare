Concatenation involves joining two or more strings together. In Go, the simplest way to concatenate two or more strings is to use the `+` operator. Here are some examples:

```go
package main

import "fmt"

func main() {
  first_name := "John"
  last_name := "Doe"
  
  // Concatenating two strings
  name := first_name + " " + last_name
  fmt.Println(name) // Output: John Doe
  
  // Concatenating multiple strings
  sentence := first_name + " " + last_name + " is a programmer."
  fmt.Println(sentence) // Output: John Doe is a programmer.
  
  // Concatenating string literals
  quote := "Knowledge is " + "power."
  fmt.Println(quote) // Output: Knowledge is power.
}
```

In the above example, we first declare two variables `first_name` and `last_name` with the values "John" and "Doe" respectively. We then use the `+` operator to concatenate them together to form the full name.

We can also concatenate multiple strings together by using the `+` operator between each string. 

Finally, we can also concatenate string literals directly without the need for variables.