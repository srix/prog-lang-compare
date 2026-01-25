In Java, the "and" operator is represented by "&&" and the "or" operator is represented by "||". These operators are used to combine multiple conditions in an if statement or while loop. 

The "and" operator (&&) evaluates to true only if both conditions are true. The "or" operator (||) evaluates to true if at least one of the conditions is true.

Here are a few examples:

Example 1: Using || operator

```
int num1 = 5;
int num2 = 10;
if (num1 > 0 || num2 < 20) {
    System.out.println("At least one condition is true.");
}
```
Output: "At least one condition is true."

In this example, the || operator is used to check if either num1 is greater than 0 or num2 is less than 20. Since both conditions are true, the code inside the if statement is executed.

Example 2: Using && operator

```
int num1 = 10;
int num2 = 20;
if (num1 > 0 && num2 < 30) {
    System.out.println("Both conditions are true.");
}
```
Output: "Both conditions are true."

In this example, the && operator is used to check if both num1 is greater than 0 and num2 is less than 30. Since both conditions are true, the code inside the if statement is executed.

Example 3: Using || and && operators together

```
int num1 = 10;
int num2 = 20;
int num3 = 5;
if ((num1 > 0 && num2 < 30) || num3 == 5) {
    System.out.println("At least one condition is true.");
}
```
Output: "At least one condition is true."

In this example, both the && and || operators are used together. The code inside the if statement is executed if either (num1 is greater than 0 and num2 is less than 30) or num3 is equal to 5. Since num3 is equal to 5, the code inside the if statement is executed.