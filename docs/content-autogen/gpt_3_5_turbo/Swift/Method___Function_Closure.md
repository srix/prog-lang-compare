Closure is a self-contained block of code that can be passed around and used. They can capture and store references to any constants and variables from the context in which they are defined. Here's an example of a closure that takes two integers and returns their sum:

```
let addNumbers = { (a: Int, b: Int) -> Int in
    return a + b
}
```

In this example, we're defining a closure with the name `addNumbers` and with the signature `(Int, Int) -> Int`. This means that the closure takes two integer parameters and returns an integer.

We can call this closure like a regular function:

```
let sum = addNumbers(2, 3)
print(sum) // Output: 5
```

Closures can also be used as arguments to other functions. For example, the `sorted(by:)` method on the `Array` class takes a closure that defines the sorting order.

```
let names = ["Alice", "Bob", "Charlie", "David"]
let sortedNames = names.sorted { $0 < $1 }
print(sortedNames) // Output: ["Alice", "Bob", "Charlie", "David"]
```

In this example, we're calling the `sorted(by:)` method on the `names` array, and passing in a closure that compares two strings by checking if the first string is less than the second string. The `$0` and `$1` placeholders refer to the first and second parameters of the closure respectively.

Closures can also capture values from their surrounding context:

```
func makeAdder(_ x: Int) -> () -> Int {
    var runningTotal = x
    return {
        runningTotal += 1
        return runningTotal
    }
}
```

In this example, we're defining a function `makeAdder` that takes an integer `x` as a parameter, and returns a closure that takes no parameters and returns an integer. The closure captures the `runningTotal` variable from the surrounding context and increments it every time it's called.

We can create instances of this closure with different `x` values:

```
let adder1 = makeAdder(0)
print(adder1()) // Output: 1
print(adder1()) // Output: 2

let adder2 = makeAdder(10)
print(adder2()) // Output: 11
print(adder2()) // Output: 12
```

In this example, `adder1` and `adder2` are two separate instances of the closure, each with their own `runningTotal` value that is incremented independently of the other.