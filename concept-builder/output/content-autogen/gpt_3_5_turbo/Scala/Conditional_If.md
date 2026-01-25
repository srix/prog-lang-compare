In Scala, if is used as a conditional statement. The syntax for using if statement in Scala is as follows:

```
if (condition) {
  // statements to execute if condition is true
}
else {
  // statements to execute if condition is false
}
```

Here is an example that demonstrates the use of if statement in Scala:

```
object Main {
   def main(args: Array[String]) {
      val num = 10;
      if (num % 2 == 0) {
         println("Number is even");
      } else {
         println("Number is odd");
      }
   }
}
```

Output: Number is even

In this example, we use the % operator to check if the number is divisible by 2 and the result is zero. If the result is zero, then we know the number is even. If the result is not zero, then we know the number is odd. We use the if statement to execute the appropriate message.