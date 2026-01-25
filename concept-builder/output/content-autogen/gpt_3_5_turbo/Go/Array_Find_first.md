To find the first element of an array in Go, you can simply access the array using the index zero. Here's an example:

```
package main

import "fmt"

func main() {
    myArray := [5]int{1, 2, 3, 4, 5}
    firstElement := myArray[0]
    fmt.Println("The first element of the array is:", firstElement)
}
```

In this example, we declare an array `myArray` with 5 elements and initialize it with some values. Then, we access the first element of the array by using the index 0 and assign it to the variable `firstElement`. Finally, we print the value of `firstElement`.

The output of this program will be:

```
The first element of the array is: 1
```

So, we have successfully found the first element of an array in Go.