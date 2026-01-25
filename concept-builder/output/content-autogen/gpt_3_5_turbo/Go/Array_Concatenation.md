In Go, we can concatenate two arrays using the `append()` function. Here's an example:

```
package main

import "fmt"

func main() {
    // Initialize arrays
    array1 := []int{1, 2, 3}
    array2 := []int{4, 5, 6}

    // Concatenate arrays
    concatenatedArray := append(array1, array2...)

    // Print concatenated array
    fmt.Println(concatenatedArray)
}
```

In this example, we first initialize two integer arrays `array1` and `array2` with integer values. We then concatenate the two arrays using the `append()` function and store the result in the `concatenatedArray` variable. 

Note that when using the `append()` function to concatenate two arrays, we need to use the `...` syntax to denote that we want to pass the elements of the second array as individual arguments to the `append` function. 

When we run this program, it should output:

```
[1 2 3 4 5 6]
```

indicating that the two arrays have been successfully concatenated.