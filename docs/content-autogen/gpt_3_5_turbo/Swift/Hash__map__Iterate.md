In Swift, we can iterate over a hash by using the `for-in` loop. Here's how:

```swift
// Define the hash
let prices = ["apple": 0.99, "banana": 0.50, "orange": 0.75]

// Iterate over the hash
for (item, price) in prices {
    print("\(item) costs \(price)")
}
```

In this example, we have a hash named `prices` that maps fruit names to their prices. The `for-in` loop iterates over each key-value pair in the hash using the tuple syntax `(item, price)`. For each iteration, the tuple's `item` variable refers to the key (fruit name) and the `price` variable refers to the value (fruit price). The loop then prints out each fruit name and its corresponding price using string interpolation.

An alternative way of iterating through the hash is to use the `forEach` method. Here's an example of how to do it:

```swift
prices.forEach { (item, price) in
    print("\(item) costs \(price)")
}
```

This works similarly to the `for-in` loop but uses a higher order function instead. The `forEach` method takes a closure that has a tuple containing the key-value pair as its argument. In this case, the closure is simply a code block that prints each key-value pair.