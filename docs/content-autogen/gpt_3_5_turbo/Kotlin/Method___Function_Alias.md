In Kotlin, an alias is a way to give a new name to an existing type. It makes code more readable and expressive by giving meaningful names to the types or functions.

Here is an example of how to use alias in Kotlin:

```kotlin
typealias Age = Int
val myAge: Age = 25
```

In this example, we create an alias `Age` for the `Int` type. We then declare a variable `myAge` of type `Age` and assign it a value of `25`. This can also be used with function types:

```kotlin
typealias Operation = (Int, Int) -> Int
val sum: Operation = { a, b -> a + b }
```

In this example, we create an alias `Operation` for the function type `(Int, Int) -> Int`. We then declare a variable `sum` of type `Operation` and assign it a lambda that sums two integers.

Using aliases can help make your code easier to read and more expressive. They can also make refactoring easier by allowing you to change the underlying type without changing all the parts of the code that use the type.