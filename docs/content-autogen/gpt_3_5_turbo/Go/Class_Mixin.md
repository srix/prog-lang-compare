In Go, a mixin is a way to add functionality to a struct by "mixing in" another struct with methods and properties into it. It is achieved by embedding the struct as a anonymous field inside the target struct.

Here is an example of how to use mixin in Go:

```
type Car struct {
    brand string
}

func (c *Car) Drive() {
    fmt.Println("Starting engine...")
    fmt.Println("Driving forward...")
}

type RaceCar struct {
    Car
}

func (r *RaceCar) Drive() {
    fmt.Println("Starting engine...")
    fmt.Println("Racing forward at high speeds...")
}

func main() {
    car := &Car{brand: "Toyota"}
    raceCar := &RaceCar{Car: Car{brand: "Ferrari"}}

    car.Drive()
    raceCar.Drive()
}
```

In the example above, we have two structs `Car` and `RaceCar`. `RaceCar` is a `Car` with additional "racing" functionality. We achieve this by embedding `Car` as an anonymous field inside the `RaceCar` struct. 

`Car` has a method `Drive` which simply prints out starting the engine and driving message on the console. `RaceCar` overrides this method with its own implementation of `Drive` which prints out starting the engine and racing forward at high speeds message.

In the main function, we create a `Car` and a `RaceCar` object and call the `Drive` method on both of them. We can see that the appropriate `Drive` method is called for each object. 

This is a simple example of Go mixins, but it can be used to extend functionality of any struct in Go. It allows developers to write modular and extensible code.