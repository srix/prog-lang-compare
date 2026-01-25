In Scala, you can change all elements of an array by using the `map` method. The `map` method applies a function to each element of the array and returns a new array with the resulting values.

Here is an example of how to use `map` to change all elements of an array:

```scala
val array = Array(1, 2, 3)
val changedArray = array.map(_ * 2)
```

In this example, we create an array `array` with the values 1, 2, and 3. We then call the `map` method on `array` and pass it a lambda function that multiplies each element by 2. The resulting array `changedArray` will have the values 2, 4, and 6.

Another example of using `map` to change all elements of an array is to convert a string array to an integer array:

```scala
val stringArray = Array("1", "2", "3")
val intArray = stringArray.map(_.toInt)
```

In this example, we have a `stringArray` that contains string representations of integers. We use `map` with a lambda function that converts each string to an integer using the `toInt` method. The resulting `intArray` will have the values 1, 2, and 3 as integers.