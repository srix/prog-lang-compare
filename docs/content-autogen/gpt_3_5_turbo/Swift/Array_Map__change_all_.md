To change all elements of an array in Swift, you can use a loop or higher-order functions like `map` or `forEach`. Here are some examples:

1. Using a loop:

```
var numbers = [1, 2, 3, 4, 5]
for i in 0..<numbers.count {
    numbers[i] *= 2
}
print(numbers) // Output: [2, 4, 6, 8, 10]
```

2. Using `map`:

```
var numbers = [1, 2, 3, 4, 5]
numbers = numbers.map { $0 * 2 }
print(numbers) // Output: [2, 4, 6, 8, 10]
```

3. Using `forEach`:

```
var numbers = [1, 2, 3, 4, 5]
numbers.forEach { $0 *= 2 }
print(numbers) // Output: [2, 4, 6, 8, 10]
```

All these methods achieve the same result - they iterate over each element of the array and perform a modification operation on it. The loop method is a more traditional approach, while `map` and `forEach` are considered more functional programming methods.