To get the first and last element of an array in Groovy, you can use the `first()` and `last()` methods respectively. Here are some examples:

```
// Example 1: Using first() and last() methods on an integer array
def numbers = [10, 20, 30, 40, 50]
def firstElement = numbers.first()
def lastElement = numbers.last()

println("First Element: ${firstElement}")  // Output: First Element: 10
println("Last Element: ${lastElement}")    // Output: Last Element: 50


// Example 2: Using first() and last() methods on a string array
def names = ["John", "Mary", "Samantha", "David"]
def firstPerson = names.first()
def lastPerson = names.last()

println("First Person: ${firstPerson}")   // Output: First Person: John
println("Last Person: ${lastPerson}")     // Output: Last Person: David
```

In both examples, we first initialize an array and then use the `first()` and `last()` methods to get the first and last elements. We store these values in separate variables and then print them using `println()`.