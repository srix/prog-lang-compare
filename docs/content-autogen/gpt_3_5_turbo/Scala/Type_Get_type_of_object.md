In Scala, you can get the type of an object using the "getType" method of the object's class. Here are some examples:

Example 1:

```
val a = 10
println(a.getClass.getTypeName)
```

Output: `int`

Explanation: In this example, we create an integer variable `a` with value `10`. We then print the type of `a` using the `getClass.getTypeName` method, which returns the name of the type as a string.


Example 2:

```
val b = "Hello, world!"
println(b.getClass.getTypeName)
```

Output: `java.lang.String`

Explanation: In this example, we create a string variable `b` with the value `"Hello, world!"`. We then print the type of `b` using the `getClass.getTypeName` method, which returns the fully qualified class name of the object.


Example 3:

```
case class Person(name: String, age: Int)
val c = Person("John", 25)
println(c.getClass.getTypeName)
```

Output: `Person`

Explanation: In this example, we define a case class `Person` with two fields `name` and `age`. We then create an instance of the `Person` class with name `"John"` and age `25` and assign it to variable `c`. Finally, we print the type of `c` using the `getClass.getTypeName` method, which returns the name of the case class as a string.