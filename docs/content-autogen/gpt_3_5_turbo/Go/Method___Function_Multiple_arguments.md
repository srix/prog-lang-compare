In Go, multiple arguments can be passed to a function using a comma separated list of parameters within the parentheses. These parameters can either be of the same type, or of different types.

Here is an example of a function that takes in two arguments, both of which are of the same type:

```
func add(x, y int) int {
    return x + y
}
```

In this function, the `add` function takes two integers as arguments `x` and `y`, and returns their sum.

Here is another example of a function that takes in three arguments, where the first two are of type `string` and the third is of type `int`:

```
func printFullName(firstName, lastName string, age int) {
    fmt.Printf("My name is %s %s, and I am %d years old.", firstName, lastName, age)
}
```

In this function, the `printFullName` function takes in three arguments: a `string` for the `firstName`, a `string` for the `lastName`, and an `int` for the `age`. It then uses these arguments to print out a message displaying the full name and age.

When calling a function with multiple arguments, they must be provided in the same order as they were defined in the function signature. For example, to call the `add` function above and pass in the arguments `5` and `7`, we would call it like this:

```
result := add(5, 7)
fmt.Println("Result:", result) // Output: Result: 12
```

Similarly, to call the `printFullName` function from the second example above, we would do it like this:

```
printFullName("John", "Doe", 30) // Output: My name is John Doe, and I am 30 years old.
```

Note that the values `"John"`, `"Doe"`, and `30` are passed to the function in the order that they were defined in the function signature.