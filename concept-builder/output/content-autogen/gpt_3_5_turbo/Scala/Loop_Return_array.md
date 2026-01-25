In Scala, you can return an array using the `Array` class. Here is an example of how to define and return an array:

```
def returnArray(): Array[String] = {
  val myArray = Array("apple", "banana", "cherry")
  return myArray
}
```

In this example, the function `returnArray` returns an array of strings containing the values "apple", "banana", and "cherry". 

You can also return an array by passing it as an argument to another function or by using an array literal:

```
def returnArrayAsArgument(myArray: Array[Int]): Array[Int] = {
  return myArray
}

def returnLiteralArray(): Array[Int] = {
  return Array(1, 2, 3)
}
```

In the first example, the function `returnArrayAsArgument` returns the array passed as an argument. In the second example, the function `returnLiteralArray` returns a literal array containing the values 1, 2, and 3.

Finally, you can use shorthand syntax to define and return an array in a single line of code:

```
def returnShorthandArray(): Array[String] = Array("dog", "cat", "fish")
```

This function returns an array of strings containing the values "dog", "cat", and "fish".