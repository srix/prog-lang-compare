In Kotlin, the if assign statement is used to assign a value to a variable based on a certain condition. 

Here is the basic syntax of the if assign statement in Kotlin:

```
val variableName = if(condition) {
    value1
} else {
    value2
}
```

The condition can be any Boolean expression that evaluates to true or false. If the condition is true, the value of `value1` will be assigned to the variable named `variableName`. Otherwise, the value of `value2` will be assigned to it.

Here's an example to illustrate how to use if assign in Kotlin:

```
fun main() {
   val age = 17
   
   val message = if(age >= 18) {
       "You are eligible to vote."
   } else {
       "Sorry, you are not eligible to vote."
   }
   
   println(message)
}
```

In the above code, we use the if assign statement to assign a value to the variable named `message`. The condition is whether the person is of 18 years of age or not. If the age is greater than or equal to 18, the message “You are eligible to vote” is assigned to the `message` variable. Otherwise, the message “Sorry, you are not eligible to vote” is assigned to it.

When we run the code, it will print "Sorry, you are not eligible to vote" since the age is 17 which is not greater than or equal to 18.