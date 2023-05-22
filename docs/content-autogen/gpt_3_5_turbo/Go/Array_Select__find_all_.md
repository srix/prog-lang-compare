In Go, we can find all elements of an array satisfying a condition by iterating over the array and checking the condition for each element. We need to create a new array to store elements which satisfy the condition. 

Here's an example code snippet to find all even elements in an array:

```go
package main

import "fmt"

func main() {
    arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    var evenArr []int

    for _, v := range arr {
        if v%2 == 0 {
            evenArr = append(evenArr, v)
        }
    }

    fmt.Println("Even elements in array:", evenArr)
}
```

In the above code, we have an integer array `arr` containing 10 elements. We also define an empty array `evenArr` to store even elements of the array. Next, we use a `for` loop to iterate over the elements of the `arr` array and check if the element is even or not. If the element is even, we append it to the `evenArr` array. Finally, we print the `evenArr` array containing all even elements of the original array.