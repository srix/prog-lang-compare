In Groovy, you can find the first element of an array by using the index notation and specifying the index of the first element, which is always zero. Here's an example:

```groovy
def myArray = [5, 8, 2, 9, 1]
def firstElement = myArray[0] // access the first element in the array
println(firstElement) // prints 5
```

In this example, we define an array `myArray` and then access the first element by using `myArray[0]`. We assign this value to the variable `firstElement` and then print it using `println()`. The output is `5`, which is the value of the first element in the array.

You can also use the `first()` method to get the first element of an array, like this:

```groovy
def myArray = [5, 8, 2, 9, 1]
def firstElement = myArray.first()
println(firstElement) // prints 5
```

In this example, we define an array `myArray` and then use the `first()` method to get the first element. We assign this value to the variable `firstElement` and then print it using `println()`. The output is `5`, which is the value of the first element in the array.