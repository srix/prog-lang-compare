In Scala, aliases are used to give a short name to a long type. This helps in simplifying the code by making it more readable. We can use the alias keyword to create a type alias in Scala.

For instance, consider the following example:

```scala
type EmployeeID = String
val empId: EmployeeID = "12345"
```

In the above example, we have created a type alias called EmployeeID, which is an alias for the String type. We have then assigned a value to the empId variable of type EmployeeID.

Another example of using an alias could be when we have to define commonly used types such as lists, maps, etc.

```scala
type IntList = List[Int]
val numbers: IntList = List(1, 2, 3, 4, 5)
```

Here, we have defined an alias IntList, which is an alias for the List[Int] type. We have then created a variable numbers of type IntList and assigned it a List of Integers.

We can also define aliases for complex types such as functions.

```scala
type F = Int => Int
val f: F = x => x * x
```

In this example, we have created an alias F for the function type Int => Int. We have then assigned a function to the variable f of type F.

In summary, aliases in Scala are a way to give a short name to a long type, and can be used to simplify code and make it more readable.