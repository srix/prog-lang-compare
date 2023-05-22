In Swift, a constant is a value that cannot be changed after it has been assigned. It is declared using the "let" keyword. Here is an example of how to declare a constant:

```
let numberOfDaysInWeek = 7
```

Here, `numberOfDaysInWeek` is a constant that has been initialized with a value of 7. Once declared, we cannot change the value of this constant throughout the program.

We can also declare constants of complex types like arrays, dictionaries, structs, and classes:

```
let cities = ["New York", "London", "Paris", "Sydney"]
let userInfo = ["name": "John", "age": 28, "email": "john@example.com"]
struct Point {
    let x: Int
    let y: Int
}
```

In each of these cases, once assigned, the constants can't be modified. Swift encourages us to use constants for values that won't change in the future because it ensures our coding intent is preserved and our code becomes more readable and modular.