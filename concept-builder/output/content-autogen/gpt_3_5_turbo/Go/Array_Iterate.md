In Go, arrays can be iterated over using a for loop. Here is an example:

```
package main

import "fmt"

func main() {
    arr := [5]int{1, 2, 3, 4, 5}

    for i := 0; i < len(arr); i++ {
        fmt.Println(arr[i])
    }
}
```

This code declares an array `arr` of length 5 and initializes it with some values. The for loop iterates over the array using an index `i` that starts from 0 and goes up to the length of the array. At each iteration, the element at index `i` is printed to the console.

Another way to iterate over an array in Go is by using a range-based for loop. Here is an example:

```
package main

import "fmt"

func main() {
    arr := [5]int{1, 2, 3, 4, 5}

    for _, value := range arr {
        fmt.Println(value)
    }
}
```

In this example, we are using `_` to ignore the index since we are only interested in the value of each element. The for loop iterates over the array `arr` and at each iteration, the value of the current element is assigned to the variable `value`. The value is then printed to the console.