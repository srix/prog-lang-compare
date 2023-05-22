Sure! In Go, an array is an ordered collection of elements of the same type. Here is an example of how to create a simple array of integers with length 5:

```
var myArray [5]int
```

In this case, `var` is used to declare a new variable, `myArray` is the name of the variable, and `[5]int` is the type of the variable, which specifies that it is an array of 5 integers.

To initialize the array with specific values, you can use the following syntax:

```
myArray := [5]int{1, 2, 3, 4, 5}
```

This creates a new array and initializes it with the values `1`, `2`, `3`, `4`, and `5`.

You can also create an array using `...` in place of the length, which tells Go to infer the length from the number of initializers:

```
myArray := [...]int{1, 2, 3, 4, 5}
```

Finally, you can access individual elements of an array using indexing. For example, to access the first element of `myArray`, you can write:

```
fmt.Println(myArray[0]) // Output: 1
```