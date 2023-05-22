In Kotlin, "not" is used as a logical operator to reverse the boolean value of expressions. 

The syntax for using "not" in Kotlin is '!' followed by the expression to be negated. 

Here are some examples to illustrate the usage of 'not' in Kotlin: 

```
// Example 1: 
val value1 = true 
val value2 = !value1 
println(value2)    // Output: false 

// Example 2: 
val number1 = 10 
val number2 = 20 
val result = !(number1 > number2) 
println(result)    // Output: true 

// Example 3: 
fun isEven(n: Int): Boolean { 
    return n % 2 == 0 
} 
val number = 7 
val isOdd = !isEven(number) 
println(isOdd)    // Output: true 
``` 

In the first example, the value of "value1" is true. By applying "not" operator on "value1", the "value2" becomes false. 

In the second example, we are checking if "number1" is greater than "number2". We are then negating the result and storing it in "result". Since "number1" is not greater than "number2", the value of "result" becomes true. 

In the third example, we are checking if the "number" is not even. We have defined a function named "isEven" that returns true if the number is even. By negating the result of "isEven(number)", we get true as output, indicating that the number is odd.