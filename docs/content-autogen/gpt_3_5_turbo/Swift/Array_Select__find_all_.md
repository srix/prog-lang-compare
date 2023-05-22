In Swift, you can find all elements of an array satisfying a condition in multiple ways. Here are a few examples:

1. Using a for-loop:
```
let numbers = [2, 4, 6, 8, 10]
var evenNumbers: [Int] = []
for number in numbers {
  if number % 2 == 0 {
    evenNumbers.append(number)
  }
}
print(evenNumbers) // Output: [2, 4, 6, 8, 10]
```

2. Using the `filter` method:
```
let numbers = [2, 4, 6, 8, 10]
let evenNumbers = numbers.filter { $0 % 2 == 0 }
print(evenNumbers) // Output: [2, 4, 6, 8, 10]
```

3. Using the `reduce` method:
```
let numbers = [2, 4, 6, 8, 10]
let evenNumbers = numbers.reduce([]) { (result, number) -> [Int] in
  return number % 2 == 0 ? result + [number] : result
}
print(evenNumbers) // Output: [2, 4, 6, 8, 10]
```

4. Using a closure that returns the satisfying elements:
```
let numbers = [2, 4, 6, 8, 10]
func findNumbersSatisfyingCondition(_ numbers: [Int], condition: (Int) -> Bool) -> [Int] {
  var satisfyingNumbers: [Int] = []
  for number in numbers {
    if condition(number) {
      satisfyingNumbers.append(number)
    }
  }
  return satisfyingNumbers
}
let evenNumbers = findNumbersSatisfyingCondition(numbers) { $0 % 2 == 0 }
print(evenNumbers) // Output: [2, 4, 6, 8, 10]
```