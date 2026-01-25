In Go, you can change all elements of an array by using a loop to iterate through the array and assign new values to each element. Here's an example code to demonstrate this:

```go
package main

import "fmt"

func main() {
   // initialize array with some values
   arr := [5]int{10, 20, 30, 40, 50}
   
   // iterate through the array and change each element
   for i := 0; i < len(arr); i++ {
      arr[i] = arr[i] + 5
   }
   
   // print the updated array
   fmt.Println(arr)
}
```

In this example, we first initialize an array `arr` with five integer values. Then we use a for loop to iterate through the array and add 5 to each element. Finally, we print the updated array using the `fmt.Println()` function.

The output of the above code will be:

```
[15 25 35 45 55]
```

This is the updated array with all elements increased by 5.