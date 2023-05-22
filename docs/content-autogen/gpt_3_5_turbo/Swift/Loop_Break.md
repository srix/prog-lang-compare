The break statement is used in Swift to exit out of a loop or a switch statement. Here are some examples of how to use break:

1. Exiting out of a loop:
```
for i in 1...5 {
    if i == 3 {
        break
    }
    print(i)
}
```
This code will print out the numbers 1 and 2, and then exit out of the loop when i == 3.

2. Exiting out of a nested loop:
```
for i in 1...3 {
    for j in 1...3 {
        if j == 2 {
            break
        }
        print("(\(i), \(j))")
    }
}
```
This code will print out pairs of numbers (i, j) for i from 1 to 3 and j from 1 to 3, but if j equals 2 it will exit out of the inner loop and continue with the next iteration of the outer loop, printing only pairs (1, 1), (1, 3), (2, 1), and (2, 3).

3. Exiting out of a switch statement:
```
let age = 20

switch age {
case ..<18:
    print("You are not old enough to enter.")
case 18..<21:
    print("You can enter, but cannot drink.")
case 21...:
    print("You can enter and drink.")
    break
default:
    print("Invalid input.")
}
```
This code uses a switch statement to check whether the value of age is less than 18, between 18 and 21, or 21 or greater. If the value of age is 21 or greater, it will print out "You can enter and drink." and use break to exit out of the switch statement. If age is less than 18 or between 18 and 21, it will print out different messages, and for any other value it will print out "Invalid input."