In Scala, we can use case classes to define a struct data structure. A case class is an immutable class that is used to hold data, with no behaviour. It is usually used to create objects that represent the data.

Here is an example of using a case class to define a struct data structure:

```
case class Person(name: String, age: Int, address: String)
```

In this example, the case class is called Person and it has three parameters: name, age and address. The parameters are of type String, Int, and String, respectively.

We can create an object of this struct as follows:

```
val person = Person("John Doe", 30, "123 Main St")
```

We can access the fields of the struct using the dot notation:

```
println(person.name) // Output: John Doe
println(person.age) // Output: 30
println(person.address) // Output: 123 Main St
```

We can also create a new object of the struct using the copy method:

```
val person2 = person.copy(name = "Jane Doe", age = 25)
```

In this case, we created a new object called person2 by copying person and changing the name to "Jane Doe" and age to 25.

We can also destructure the struct object using pattern matching:

```
val Person(name, age, address) = person
println(name) // Output: John Doe
println(age) // Output: 30
println(address) // Output: 123 Main St
```

In this example, we destructure the person object into the name, age, and address variables.