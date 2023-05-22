To add an element to an array in Scala, you should use the `:+` operator which creates a new array with the added element. Here is an example:

```
// Initialize an array of strings
var fruits = Array("apple", "banana", "orange")

// Add a new fruit to the array
fruits = fruits :+ "pear"

// Print the updated array
print(fruits.mkString(", "))
// Output: apple, banana, orange, pear
```

In this example, we initialize an array `fruits` with three strings. To add a new fruit "pear" to the array, we use the `:+` operator and assign the result to the same array `fruits`. The `mkString` method is used to print the array as a comma-separated string. 

Alternatively, you can also use the `concat` method to add an array or a sequence of elements to an existing array. Here is an example:

```
// Initialize an array of integers
var numbers = Array(1, 2, 3)

// Add new numbers to the array
numbers = numbers.concat(Seq(4, 5, 6).toArray)

// Print the updated array
print(numbers.mkString(", "))
// Output: 1, 2, 3, 4, 5, 6
```

In this example, we initialize an array `numbers` with three integers. To add new numbers 4, 5, 6 to the array, we use the `concat` method with a sequence of elements converted to an array and assign the result to the same array `numbers`. The `mkString` method is used to print the array as a comma-separated string.