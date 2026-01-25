In Go, you can use the `range` keyword to iterate over an array with index. Here's an example:

```
package main

import "fmt"

func main() {
    arr := []string{"apple", "banana", "cherry"}

    for i, val := range arr {
        fmt.Printf("Index: %d, Value: %s\n", i, val)
    }
}
```

In this example, we have an array of strings `arr` containing three fruits. We use the `range` keyword in the `for` loop to iterate over the `arr` array. The `range` keyword returns two values - the index and the value at that index. We store these values in `i` and `val` respectively.

Inside the `for` loop, we print the index and value using the `Printf` function. The `%d` and `%s` are format specifiers for integers and strings respectively.

When we run this program, we get the following output:

```
Index: 0, Value: apple
Index: 1, Value: banana
Index: 2, Value: cherry
```