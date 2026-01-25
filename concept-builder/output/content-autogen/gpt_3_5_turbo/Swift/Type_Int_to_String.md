To convert an integer to a string in Swift, you can use the `String` initializer that takes in an integer argument. Here's an example:

```
let number = 42
let stringNumber = String(number)
print(stringNumber) // "42"
```

In this example, we create an integer variable called `number` with a value of 42. To convert this integer to a string, we pass it as an argument to the `String` initializer and assign the result to a new variable called `stringNumber`. We print the value of `stringNumber` using the `print` function, which outputs "42" to the console.

You can also use string interpolation to convert an integer to a string. Here's an example:

```
let age = 28
let message = "My age is \(age)"
print(message) // "My age is 28"
```

In this example, we create an integer variable called `age` with a value of 28. We then create a string variable called `message` that uses string interpolation to insert the value of `age` into the string. We print the value of `message` using the `print` function, which outputs "My age is 28" to the console.