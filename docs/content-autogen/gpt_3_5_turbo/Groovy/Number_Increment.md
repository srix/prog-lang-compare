In Groovy, we can increment a number using the `++` operator. The `++` operator is used after the variable name and increments the value by 1. Here is an example:

```groovy
def x = 5 // initialize x with value 5
x++ // increment x by 1
println x // Output: 6
```

We can also use the `++` operator before the variable name. This will first increment the value and then return it. Here is another example:

```groovy
def y = 10 // initialize y with value 10
println ++y // Output: 11
println y // Output: 11
```

In this example, `++y` increments y by 1 and returns the new value, which is then printed. And the second `println` statement just prints the new value of y.