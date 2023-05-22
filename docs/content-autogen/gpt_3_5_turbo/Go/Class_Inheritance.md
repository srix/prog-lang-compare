In Go, inheritance is achieved through the concept of embedding. Embedded types are types that are included within other types or structs, which allows them to inherit the properties and methods of the embedded types. Here is an example of how to use inheritance in Go:

```
// Define a base struct called "Person"
type Person struct {
    Name string
    Age int
}

// Define a struct that embeds the "Person" struct
type Employee struct {
    Person
    Id int
    Salary float64
}

// Define a method for the "Person" struct
func (p *Person) Greet() {
    fmt.Printf("Hello, my name is %s. Nice to meet you!\n", p.Name)
}

// Define a method for the "Employee" struct
func (e *Employee) Work() {
    fmt.Printf("I am %s and I work here. My ID is %d and my salary is $%.2f.\n", e.Name, e.Id, e.Salary)
}

func main() {
    // Create a new employee instance
    e := Employee{
        Person: Person{
            Name: "John",
            Age: 30,
        },
        Id: 001,
        Salary: 50000,
    }

    // Call the Greet method from the embedded Person struct
    e.Greet() // Output: "Hello, my name is John. Nice to meet you!"

    // Call the Work method from the Employee struct
    e.Work() // Output: "I am John and I work here. My ID is 1 and my salary is $50000.00."
}
```

In this example, we define a base struct called `Person` that has two properties: `Name` and `Age`, and a method called `Greet`. Then, we define a struct called `Employee` that embeds the `Person` struct and adds two more properties: `Id` and `Salary`, and a method called `Work`. When we create a new `Employee` instance, we can call both the `Greet` and `Work` methods on it, even though `Greet` is defined within the embedded `Person` struct. This demonstrates how embedding can be used to achieve inheritance in Go.