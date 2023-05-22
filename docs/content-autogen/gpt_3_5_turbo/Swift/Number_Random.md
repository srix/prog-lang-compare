In Swift, you can generate random numbers using the built-in functions in the `arc4random_uniform()` and `random()` methods. Here are some examples:

1. `arc4random_uniform()`:

This function returns a uniformly distributed random number between 0 and an upper bound specified as an argument. For example, the following code generates a random number between 0 and 99:

```
let randomNumber = arc4random_uniform(100)
print(randomNumber)
```

2. `random()`:

This method is used to generate a random number in a specified range. For example, the following code produces a random number between 1 and 6 (inclusive) to simulate a dice roll:

```
let diceRoll = Int.random(in: 1...6)
print(diceRoll)
```

You can also specify a range with the `Range` type:

```
let randomNumber = Int.random(in: 1..<11)
print(randomNumber)
```

These are just a few examples of how to generate random numbers in Swift. With these functions, you can easily generate random values for a wide range of use cases, such as randomizing game elements or generating test data.