Constants in Go represent fixed values that cannot be modified once they are declared. The syntax for declaring a constant is using the `const` keyword followed by the name of the constant, the type of the constant, and its value. Here are some examples:

```
const pi float64 = 3.14159265359
```

In this example, we declare a constant `pi` of type `float64` with the value `3.14159265359`.

```
const (
    apple  = "fruit"
    banana = "fruit"
    carrot = "vegetable"
)
```

In this example, we declare multiple constants using the `const` keyword followed by parentheses. Each constant is declared on a separate line and has an assigned value. This is a handy way to declare related constants together.

Constants can also be used in expressions:

```
const (
    a = 10
    b = a * 5
    c = b / 2
)

fmt.Println(a, b, c) // Outputs: 10 50 25
```

In this example, we declare constants `a`, `b`, and `c`. The value of `b` is calculated as `a` multiplied by `5`, and the value of `c` is calculated as `b` divided by `2`. All three constants are then printed to the console.

You can also use constants as values for case labels in switches:

```
const (
    monday = "Monday"
    tuesday = "Tuesday"
    // ...
)

func dayOfWeek(day string) {
    switch day {
    case monday:
        fmt.Println("It's Monday!")
    case tuesday:
        fmt.Println("It's Tuesday!")
    default:
        fmt.Println("It's some other day.")
    }
}

dayOfWeek(monday) // Outputs: It's Monday!
```

In this example, we declared constants for days of the week and used them as case labels in a switch statement. Depending on the input, a message about the day of the week is printed to the console.

Constants in Go can be used to make programs more readable and maintainable by giving meaningful names to important values.