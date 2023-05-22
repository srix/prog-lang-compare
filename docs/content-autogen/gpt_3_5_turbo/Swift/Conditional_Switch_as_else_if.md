In Swift, the switch statement can be used as a alternative to if-else statements. The switch statement evaluates a value and compares it against multiple cases until a match is found. Here's an example of how to use switch as a replacement for else-if.

```
let number = 10

switch number {

case 0:
    print("Number is zero")

case 1...5:
    print("Number is between 1 and 5")

case 6, 7, 8:
    print("Number is between 6 and 8")

case 9..<20:
    print("Number is between 9 and 19")

default:
    print("Number is greater than or equal to 20")

}
```

In the above code, we are evaluating the value of the variable 'number' and comparing it against multiple cases using s switch statement. We specify each case using the 'case' keyword and mention the value or range of values it represents. We can also use the 'default' keyword to define a catch-all case if none of the other cases match.

Note that unlike an if-else statement, where only one condition can be true at a time, a switch statement can have more than one matching case.