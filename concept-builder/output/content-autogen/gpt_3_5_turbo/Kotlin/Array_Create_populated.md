An array is a collection of elements of the same data type, which can be accessed by an index. In Kotlin, you can create an array using the following syntax:

```
val arrayName: Array<DataType> = arrayOf(element1, element2, ..., elementN)
```

Here's an example of creating an array of integers:

```
val numbers: Array<Int> = arrayOf(1, 2, 3, 4, 5)
```

You can also create an array of strings like this:

```
val fruits: Array<String> = arrayOf("apple", "banana", "orange", "mango")
```

And here's an example of creating an array of booleans:

```
val bools: Array<Boolean> = arrayOf(true, false, true)
```

You can also create an empty array with a specific size by using the `arrayOfNulls` function:

```
val arrayOfNulls: Array<Int?> = arrayOfNulls(5)
```

This creates an array of 5 null values. 

Note that in Kotlin, arrays are mutable, which means that you can modify their values. If you want to create an immutable list, you can use the `listOf` function instead of `arrayOf`.