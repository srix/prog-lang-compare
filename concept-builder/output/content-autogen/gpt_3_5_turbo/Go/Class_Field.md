In Go, a field is a variable that belongs to a struct, which is a composite type that groups together zero or more variables with different data types. Here's an example of how to define a struct with fields:

```go
type Car struct {
    make      string
    model     string
    year      int
    condition string
}
```

In this example, we define a `Car` struct with four fields: `make`, `model`, `year`, and `condition`. Each field has a different data type (`make` and `model` are strings, `year` is an int, and `condition` is also a string).

Once we have defined a struct with fields, we can create instances of that struct and set the values for its fields, like this:

```go
myCar := Car{
    make: "Toyota",
    model: "Camry",
    year: 2020,
    condition: "new",
}
```

In this example, we create a new `Car` instance called `myCar` and set its fields to specific values. We can access the values of the fields by using the dot notation, like this:

```go
fmt.Println(myCar.make) // output: Toyota
fmt.Println(myCar.model) // output: Camry
fmt.Println(myCar.year) // output: 2020
fmt.Println(myCar.condition) // output: new
```

We can also modify the values of the fields by using the dot notation, like this:

```go
myCar.condition = "used"
fmt.Println(myCar.condition) // output: used
```

In this example, we change the value of the `condition` field from "new" to "used".