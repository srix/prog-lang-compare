Destructuring assignment is a feature in Kotlin that enables you to extract values from objects or arrays and assign them to variables in a single statement. This allows you to easily access individual elements of an array or properties of an object without having to use multiple statements. Here are some examples of how to use destructuring assignment in Kotlin:

1. Destructuring a Pair object:

```
val pair = Pair("Kotlin", 1.4)
val (language, version) = pair
println("Language: $language, Version: $version")
```

Output: `Language: Kotlin, Version: 1.4`

In the example above, we create a Pair object that contains a string value for the language and a double value for the version. We then use destructuring to assign these values to two variables, `language` and `version`. Finally, we print out the values of these variables.

2. Destructuring an array:

```
val numbers = arrayOf(1, 2, 3, 4, 5)
val (n1, n2, n3, n4, n5) = numbers
println("$n1 $n2 $n3 $n4 $n5")
```

Output: `1 2 3 4 5`

In this example, we create an array of integers and use destructuring to assign each value to a variable. We then print out the values of these variables.

3. Destructuring an object:

```
data class Person(val name: String, val age: Int)

val person = Person("John Smith", 35)
val (name, age) = person
println("Name: $name, Age: $age")
```

Output: `Name: John Smith, Age: 35`

In this example, we create a data class `Person` with two properties `name` and `age`. We then create an instance of this class and use destructuring to assign the values of its properties to two variables. Finally, we print out the values of these variables.

Destructuring assignment is a convenient way to extract values from objects and arrays in Kotlin. This feature can save you time and simplify your code by allowing you to assign multiple values to variables in a single statement.