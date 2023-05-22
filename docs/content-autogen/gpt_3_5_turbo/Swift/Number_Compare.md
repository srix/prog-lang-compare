In Swift, you can compare numbers using logical operators such as `<`,`>`,`<=`, and `>=`. Here are some examples of how to compare numbers:

1. Comparing integers:
```
let num1 = 10
let num2 = 20

if num1 < num2 {
    print("num1 is less than num2")
} else if num1 > num2 {
    print("num1 is greater than num2")
} else {
    print("num1 is equal to num2")
}
```

2. Comparing floating-point numbers:
```
let num1 = 10.5
let num2 = 20.0

if num1 < num2 {
    print("num1 is less than num2")
} else if num1 > num2 {
    print("num1 is greater than num2")
} else {
    print("num1 is equal to num2")
}
```

3. Comparing numbers in an array:
```
let numbers = [10, 20, 30]

if numbers[0] < numbers[1] {
    print("\(numbers[0]) is less than \(numbers[1])")
} else if numbers[0] > numbers[1] {
    print("\(numbers[0]) is greater than \(numbers[1])")
} else {
    print("\(numbers[0]) is equal to \(numbers[1])")
}
```

In these examples, we use the if-else statements to compare the numbers and print the appropriate message depending on the comparison result.