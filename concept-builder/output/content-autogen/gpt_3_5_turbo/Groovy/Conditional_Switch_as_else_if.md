In Groovy, switch is similar to the regular switch statement in other programming languages. However, it can also be used as an alternative to multiple else if conditions.

Here is an example of using switch as else if using a simple if-else example:

```
def number = 2

switch (number) {
   case 1:
      println "Number is 1"
      break
   case 2:
      println "Number is 2"
      break
   case 3:
      println "Number is 3"
      break
   default:
      println "Number is not 1, 2, or 3"
      break
}
```

In the above example, we assign `number` the value of 2. We then use switch to check the value of `number`. If `number` is 1, we print "Number is 1". If it's 2, we print "Number is 2". If it's 3, we print "Number is 3". If it's anything else, we print "Number is not 1, 2, or 3".

The `break` statement is used to exit the switch statement after a condition has been met.

Now, let's use the same example but with multiple else if conditions:

```
def number = 2

if (number == 1) {
    println "Number is 1"
} else if (number == 2) {
    println "Number is 2"
} else if (number == 3) {
    println "Number is 3"    
} else {
    println "Number is not 1, 2, or 3"
}
```

In this example, we use if-else conditions to achieve the same result as the switch statement. However, switch can be a more concise way to handle multiple conditions in cases where the logic is more complex.

Note that switch can also handle other data types like strings, floats, and booleans, and can be used in conjunction with regular expressions.