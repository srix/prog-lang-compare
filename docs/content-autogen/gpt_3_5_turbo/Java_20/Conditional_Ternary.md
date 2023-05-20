Ternary operator is a shorthand way of writing an if-else statement in Java. It allows us to write an expression that returns a value based on a true or false condition. 

The basic syntax of the ternary operator is as follows:

```java
variable = (condition) ? expressionTrue : expressionFalse;
```

Here, if the condition is true, expressionTrue is executed and the value of the variable is assigned to the result of expressionTrue. If the condition is false, expressionFalse is executed and the value of the variable is assigned to the result of expressionFalse.

Let's see some examples of the ternary operator in action.

Example 1:
```java
int num1 = 10;
int num2 = 20;
int maxNum = (num1 > num2) ? num1 : num2;
System.out.println("The maximum number is: " + maxNum);
```
Output: The maximum number is: 20

Explanation: Here, we are comparing num1 and num2, and assigning the larger value to maxNum using ternary operator.

Example 2:
```java
String result = (5 > 3) ? "True" : "False";
System.out.println(result);
```
Output: True

Explanation: Here, we are comparing the values 5 and 3, and assigning the result of this comparison to the String variable result.

Example 3:
```java
int num = -10;
String sign = (num > 0) ? "positive" : "negative";
System.out.println("The number is " + sign);
```
Output: The number is negative

Explanation: Here, we are checking whether the value of num is greater than zero. If it is, we assign "positive" to the String variable sign, otherwise "negative" is assigned. In this case, since num is negative, the value of sign will be "negative".