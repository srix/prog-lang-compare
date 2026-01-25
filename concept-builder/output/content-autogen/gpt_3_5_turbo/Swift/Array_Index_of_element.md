Sure, in Swift, we can get the index of an element in an array using the `firstIndex(of:)` method. Here's an example:

```
let fruits = ["apple", "banana", "orange", "grape"]

if let index = fruits.firstIndex(of: "banana") {
   print("The index of banana is \(index)")
} else {
   print("Banana is not in the array")
}
```

In this example, we have an array of fruits and we want to find the index of the "banana" element. The `firstIndex(of:)` method returns an optional integer value, which is the index of the first occurrence of the specified element in the array. If the element is not in the array, the method returns nil. 

In this case, the output would be:
```
The index of banana is 1
```

Another example could be:

```
let numbers = [4, 7, 8, 2, 9, 3]

if let index = numbers.firstIndex(of: 8) {
   print("The index of 8 is \(index)")
} else {
   print("8 is not in the array")
}
```

In this case, we have an array of numbers and we want to find the index of the number 8. If the element is not in the array, the method returns nil. 

In this case, the output would be:
```
The index of 8 is 2
```