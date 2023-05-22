In Swift, an alias is a way to create an alternate name for an existing data type. It is often used to simplify complex or lengthy data types and make them easier to use and understand. It is defined using the `typealias` keyword followed by the new name and the existing data type it represents. Here's an example:

```
typealias EmployeeID = Int
```
In this example, we define a new data type called `EmployeeID` that is an integer. Now, instead of using the word `Int` everywhere we need to represent an employee ID, we can simply use `EmployeeID`. Here's an example of how it might be used:

```
let employeeNumber: EmployeeID = 1234
```
We can also use `typealias` to simplify complex data types. For example, we can create an alias for a tuple that has two values, a string and an integer:

```
typealias Person = (name: String, age: Int)
```
Now we can create a `Person` instance like this:

```
let person: Person = ("John", 25)
```

Using aliases can make your code easier to read and write, especially when dealing with complex data types.