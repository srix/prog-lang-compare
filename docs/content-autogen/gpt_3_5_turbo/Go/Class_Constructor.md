In Go, constructors are implemented as special functions that create and initialize new instances of a custom type. The constructor function should have the same name as the type it creates and should return a new instance of the type.

Here is an example of a simple constructor function for a struct type called `Person`:

```go
type Person struct {
    Name string
    Age  int
}

func NewPerson(name string, age int) *Person {
    return &Person{
        Name: name,
        Age:  age,
    }
}
```

In this example, `NewPerson` is the constructor function for the `Person` struct type. It takes two arguments, `name` and `age`, and returns a pointer to a new `Person` instance.

To use the constructor function, you can simply call it like any other function, passing in the desired values for the `name` and `age` fields:

```go
p := NewPerson("Alice", 27)
fmt.Println(p.Name, p.Age) // Output: Alice 27
```

Here, the `NewPerson` function is called with the values `"Alice"` and `27`, and the resulting pointer to the new `Person` instance is assigned to the variable `p`. The `Name` and `Age` fields of the `p` instance are then printed to the console.

Note that the use of constructors in Go is not mandatory, and you can create new instances of a custom type without using a constructor function. However, constructors can be useful for ensuring that new instances are always created with a consistent initial state, and for encapsulating any initialization logic that needs to be performed.