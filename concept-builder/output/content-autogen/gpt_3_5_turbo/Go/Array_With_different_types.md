In Go, arrays can only have a single type of element. However, we can use the `interface{}` type as the element type, which allows us to specify an array with different types. Here's an example:

```
package main

import "fmt"

func main() {
   var arr [3]interface{}
   arr[0] = "Hello"
   arr[1] = 123
   arr[2] = true
   
   fmt.Println(arr)
}
```

In this example, we create an array `arr` with three elements, each having the `interface{}` type. We then assign a string, an integer, and a boolean value to the elements respectively. Finally, we print out the array using `fmt.Println()` which will display `[Hello 123 true]`.

Note that when trying to access the elements of this array, we will need to use a type assertion to convert the element to the expected type. For example, to retrieve the string element at index 0, we would do:

``` 
element, ok := arr[0].(string)
if ok {
    fmt.Println("Element 0:", element)
} else {
    fmt.Println("Element 0 is not a string")
}
```

In this case, `element, ok := arr[0].(string)` is a type assertion that tries to extract the value of the first element as a string. The `ok` value will be `true` if the conversion was successful and `false` otherwise. The if-else statement is then used to handle each case appropriately.