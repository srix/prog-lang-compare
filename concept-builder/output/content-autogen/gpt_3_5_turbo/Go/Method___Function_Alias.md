In Go, an alias is a way to give an existing type a new name. This makes the code more readable and understandable. For example, you can create an alias for the type `int` and call it `number`:

```
type number int
```

Now you can use `number` instead of `int` in your code:

```
var x number = 5
fmt.Println(x) // prints "5"
```

You can also create an alias for a user-defined type, like a struct:

```
type person struct {
    name string
    age int
}

type employee person

func main() {
    emp := employee{name: "John", age: 30}
    fmt.Println(emp) // prints "{John 30}"
}
```

In this example, we create an alias for the `person` struct called `employee`. We can use `employee` just like we use `person`, but it's a different type. When we create `emp` as an `employee`, we can still access its `name` and `age` fields.