To declare a class in Go, we use the keyword "type" followed by the name of the class and the keyword "struct" to define the properties of the class. Here is an example code snippet to declare a class in Go:

```
type Person struct {
   name string
   age int
   gender string
}

func main() {
   p := Person{name: "John", age: 25, gender: "male"}
   fmt.Println(p)
}
```

In the above code, we have declared a class named `Person` with three properties: `name`, `age`, and `gender`. We have initialized an object of the `Person` class with the values "John", 25, and "male" using the `:=` operator. Finally, we have printed the object using the `fmt.Println()` function.

We can also declare class methods in Go using the `func` keyword. Here is an example:

```
type Person struct {
   name string
   age int
   gender string
}

func (p Person) introduce() {
   fmt.Printf("Hi, my name is %s and I am %d years old. I am a %s.\n", p.name, p.age, p.gender)
}

func main() {
   p := Person{name: "John", age: 25, gender: "male"}
   p.introduce()
}
```

In this code, we have declared a method named `introduce()` on the `Person` class. The method takes the `Person` object as its receiver, allowing us to access and modify the object's properties. We have initialized an object of the `Person` class and called the `introduce()` method on it, which prints a message introducing the person using their `name`, `age`, and `gender` properties.