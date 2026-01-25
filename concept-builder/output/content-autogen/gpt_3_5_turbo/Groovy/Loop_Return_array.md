To return an array in Groovy, you can create the array using square brackets notation and then use the `return` keyword to return the array from a method.

Here is an example method that returns an array of integers:

```groovy
def getIntegerArray() {
    def integers = [1, 2, 3, 4, 5]
    return integers
}

// calling the method and printing the array
println getIntegerArray()
```

Output:

```
[1, 2, 3, 4, 5]
```

You can also use the `def` keyword to define the array and then return it in one line:

```groovy
def getStringArray() {
    def strings = ["Groovy", "is", "cool"]
    strings
}

// calling the method and printing the array
println getStringArray()
```

Output:

```
[Groovy, is, cool]
```

Note that in this example, we did not need to use the `return` keyword. The last line of the method is an implicit return, which returns the `strings` variable.