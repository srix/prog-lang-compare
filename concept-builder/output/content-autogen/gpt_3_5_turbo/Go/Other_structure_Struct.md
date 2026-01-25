In Go, a `struct` is a grouping of zero or more values with different types. It's similar to a class in object-oriented programming.

To define a `struct` in Go, you use the `type` keyword, followed by the name of the struct, and a set of curly braces that contains the names and types of each field in the struct.

Here's an example:

```
type Person struct {
    Name string
    Age  int
}
```

This struct, named `Person`, has two fields: `Name`, which is of type `string`, and `Age`, which is of type `int`.

You can create a new instance of the `Person` struct using the `var` keyword, followed by the name of a variable, and then initializing the fields of the struct with a set of braces.

```
var p1 Person = Person{
    Name: "Alice",
    Age:  32,
}
```

You can access the fields of the struct using the `.` operator.

```
fmt.Println(p1.Name) // prints "Alice"
fmt.Println(p1.Age)  // prints "32"
```

You can also define methods on structs using the same syntax as with regular functions, but with the `receiver` keyword before the name of the struct. For example:

```
func (p Person) Greet() string {
    return fmt.Sprintf("Hi, my name is %s and I'm %d years old.", p.Name, p.Age)
}

fmt.Println(p1.Greet()) // prints "Hi, my name is Alice and I'm 32 years old."
```

This method, named `Greet`, takes a `Person` struct as a receiver and returns a string that includes the person's name and age. You can call this method on any instance of the `Person` struct.