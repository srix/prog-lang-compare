In Scala, we can add an element to a hash using the `+=` operator. 

Here is an example:

```scala
val students = collection.mutable.HashMap[Int, String]() // creating an empty hash with Integer keys and String values

students += (1 -> "John") // adding the first element with key 1 and value "John"
students += (2 -> "Mary") // adding the second element with key 2 and value "Mary"

println(students) // Output: HashMap(1 -> John, 2 -> Mary)
```

In the above example, we first create an empty `HashMap` with `Int` as key and `String` as value. We then add two elements to the hash using the `+=` operator. The `->` operator is used to create a key-value pair, which is then added to the hash. Finally, we print the contents of the hash using the `println` method. 

We can also add multiple elements to the hash at once using the `++=` operator. Here is an example:

```scala
val students = collection.mutable.HashMap[Int, String]() // creating an empty hash with Integer keys and String values

students ++= Map(1 -> "John", 2 -> "Mary", 3 -> "Bob") // adding three elements to the hash using a Map

println(students) // Output: HashMap(1 -> John, 2 -> Mary, 3 -> Bob)
```

In this example, we use the `++=` operator to add three elements to the hash at once using a `Map`. The `Map` contains key-value pairs of type `Int` and `String`, which are added to the hash.