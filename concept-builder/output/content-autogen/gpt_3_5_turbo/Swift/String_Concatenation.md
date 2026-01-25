To concatenate strings in Swift, you use the "+" operator. Here are two examples:

```swift
let str1 = "Hello"
let str2 = "World"
let greeting = str1 + " " + str2
print(greeting)
// Output: "Hello World"
```

In this example, we declared two string variables `str1` and `str2` with the values "Hello" and "World", respectively. We then concatenated these strings with a space in between and stored the result in a new variable called `greeting`. Finally, we printed the value of `greeting` which outputs "Hello World".

```swift
let name = "John"
let age = 35
let message = "My name is \(name) and I am \(age) years old"
print(message)
// Output: "My name is John and I am 35 years old"
```

In this second example, we declare two variables `name` and `age` which store a person's name and age, respectively. We then use string interpolation, which is done by using the "\()" syntax, to dynamically insert these values into a string variable called `message`. Finally, we print the value of `message` which outputs "My name is John and I am 35 years old".