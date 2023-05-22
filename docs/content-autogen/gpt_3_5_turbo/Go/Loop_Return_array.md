In Go, you can return an array from a function. Here is an example:

```go
package main

import "fmt"

// function to create and return an array
func createArray() [5]int {
    arr := [5]int{1, 2, 3, 4, 5}
    return arr
}

func main() {
    // calling the createArray() function
    arr := createArray()
    fmt.Println(arr)
}
```

In this program, we have created a function called `createArray()`, which returns an array of 5 integers. We have initialized the array with values 1, 2, 3, 4, and 5.

In the `main()` function, we have called the `createArray()` function and assigned its return value to an array `arr`.

When we run this program, it will output the following:

```
[1 2 3 4 5]
```

As you can see, the `createArray()` function has successfully returned an array, which we have printed in the `main()` function.

It's important to note that when you return an array from a function, you must specify the size of the array in the return type. In the example above, we have specified `[5]int` as the return type.