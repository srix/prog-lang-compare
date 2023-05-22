In Go, we can delete an element from an array by creating a new array without the particular element we want to remove, as the size of arrays in Go is fixed and cannot be modified. Here's an example:

```
package main

import "fmt"

func main() {
   // Creating an array of integers
   num_array := []int{2, 4, 6, 8, 10}

   // Removing the element 6 from the array
   num_array = removeElement(num_array, 2)

   // Printing the updated array
   fmt.Println(num_array)
}

func removeElement(array []int, index int) []int {
   // Removing the element at the specified index
   array = append(array[:index], array[index+1:]...)

   // Returning the updated array
   return array
}
```

In the above example, we first create an array of integers `num_array` with five elements. We then call the `removeElement` function, passing the array and the index of the element we want to remove. Inside the function, we use the `append` function to create a new array that excludes the element we want to remove. The `append` function takes two slices as arguments, and the `...` syntax is used to indicate that all elements of the second slice should be appended to the first slice. Finally, we return the updated array.

In the main function, after calling the `removeElement` function, we print the updated array, which should now contain all the original elements except for the one we removed. In this case, the output will be `[2 4 8 10]`, as the element at index 2 (which was the number 6) has been removed from the array.