In Scala, we can delete an element from an array using the `array.filter()` method. 

Let's say we have an array named `arr` with some elements:

```
val arr = Array(1, 2, 3, 4, 5)
```

Now, if we want to remove the element "3" from the array, we can use the filter method as follows:

```
val newArr  = arr.filter(_ != 3)
```

The `_ != 3` is a shorthand for a function that takes a single argument and returns true if the argument is not 3 (i.e., it returns false when the argument is 3). This function is passed into the `filter()` method, so only the elements that satisfy this condition are kept in the new array.

The resulting array `newArr` will be:

```
Array(1, 2, 4, 5)
```

Note that the original array `arr` remains unchanged.

We can also use this method to remove multiple elements from an array. For example, to remove elements 2 and 4, we can do:

```
val newArr = arr.filter(x => x != 2 && x != 4)
```

This will remove elements 2 and 4 from the original array `arr`, resulting in the new array:

```
Array(1, 3, 5)
``` 

Again, note that the original array `arr` remains unchanged.