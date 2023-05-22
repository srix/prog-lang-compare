In Swift, a constant list is a collection of elements that cannot be modified once they are assigned. Here is an example of creating a constant list:

```swift
let fruits = ["apple", "banana", "orange", "kiwi"]
```

In the above example, the constant list `fruits` contains four elements: "apple", "banana", "orange", and "kiwi". The use of `let` keyword declares that the `fruits` list is a constant, which means that it cannot be changed once it has been initialized.

You can access the elements of the list using their index, just like in other programming languages. For example:

```swift
let secondFruit = fruits[1] // "banana"
```

You can also loop through a constant list using a `for` loop as shown below:

```swift
for fruit in fruits {
   print(fruit)
}
```

Output:

```
apple
banana
orange
kiwi
```

One important thing to note when working with constant lists is that you cannot add or remove elements from them. This is because they are constant and cannot be modified. Attempting to add or remove elements will result in a compiler error.