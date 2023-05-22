To create a multidimensional array in Go, you can use the following syntax:

```go
var arr [x][y]datatype
```

where x and y are the size of the array and datatype is the data type of the elements. For example, to create a 2D array of integers with dimensions 3x4, you can use:

```go
var arr [3][4]int
```

To initialize the multidimensional array in Go, you can use the following syntax:

```go
var arr = [x][y]datatype{
   {value1, value2, value3},
   {value4, value5, value6},
   {value7, value8, value9},
   ...
}
```

Alternatively, you can initialize the multidimensional array like this:

```go
var arr [3][3]int = [3][3]int{
   {1, 2, 3},
   {4, 5, 6},
   {7, 8, 9},
}
```

Here's a complete example:

```go
package main

import "fmt"

func main() {
    var arr [3][3]int = [3][3]int{
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
    }

    fmt.Println(arr)
}
```

Output:

```
[[1 2 3] [4 5 6] [7 8 9]]
```

In this example, we created a 2D array of size 3x3 and initialized it with values from 1 to 9. When we print the array, we can see that it contains the expected values.