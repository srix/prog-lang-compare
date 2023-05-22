In Swift, arrays can store values of any type as long as they are consistent. This means that all the elements in the array must be of the same type. However, there is a way to create an array with different types using a concept called `Any`.

`Any` is a special type in Swift that can represent any value, including instances of any class. To create an array with different types, we can declare the array as type `Any`.

Here's an example:

```swift
var mixedArray: [Any] = [1, "Two", 3.0, true]
```

In this example, the `mixedArray` has elements of different types:

- Int
- String
- Double
- Bool

We can add or remove elements from this array just like any other array. We can also access elements by their index or iterate over the array using a loop.

Another way to create an array with different types is to use the `AnyObject` type. This is similar to `Any`, but it restricts the types to only classes and not structs or enums.

Here's an example:

```swift
var objectArray: [AnyObject] = [NSString(string: "hello"), NSNumber(value: 12.5), NSObject()]
```

In this example, the `objectArray` has elements of different classes:

- NSString
- NSNumber
- NSObject

Note that using `Any` or `AnyObject` to create an array with different types can make the code harder to read and maintain, so it's generally recommended to use typed arrays wherever possible.