To check if an array includes an element in Swift, we can use the `contains` method. The method returns a boolean value indicating whether the array contains the specified element. Here's an example:

```swift
let numbers = [1, 2, 3, 4, 5]
let x = 3

if numbers.contains(x) {
    print("The array includes the value \(x)")
} else {
    print("The array does not include the value \(x)")
}
```

In this example, we declare an array `numbers` of type `[Int]` and an integer `x` with the value of `3`. The `contains` method is called on the `numbers` array with the argument `x`. The method returns `true` since `3` is included in the array. So the `if` statement is executed and the message "The array includes the value 3" is printed to the console.

Similarly, we can also check if an array includes a string element. Here's an example:

```swift
let fruits = ["apple", "banana", "orange"]
let fruit = "kiwi"

if fruits.contains(fruit) {
    print("The array includes the value \(fruit)")
} else {
    print("The array does not include the value \(fruit)")
}
```

In this example, we declare an array `fruits` of type `[String]` and a string `fruit` with the value of `kiwi`. The `contains` method is called on the `fruits` array with the argument `fruit`. The method returns `false` since `kiwi` is not included in the array. So the `else` statement is executed and the message "The array does not include the value kiwi" is printed to the console.