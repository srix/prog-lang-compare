The "if" statement in Java is a conditional statement that allows you to execute a block of code only if a certain condition is true. Here are 20 examples of how to use "if" statements in Java:

Example 1: Basic "if" statement
```
int num = 5;
if (num > 0) {
   System.out.println("The number is positive!");
}
```
This program will print "The number is positive!" since the condition "num > 0" is true.

Example 2: "if else" statement
```
int num = -2;
if (num > 0) {
   System.out.println("The number is positive!");
} else {
   System.out.println("The number is not positive!");
}
```
This program will print "The number is not positive!" since the condition "num > 0" is false.

Example 3: Nested "if" statement
```
int num = 10;
if (num > 0) {
   if (num % 2 == 0) {
      System.out.println("The number is even and positive!");
   } else {
      System.out.println("The number is odd and positive!");
   }
}
```
This program will print "The number is even and positive!" since the condition "num > 0" is true and "num % 2 == 0" is also true.

Example 4: "if else if" statement
```
int num = 0;
if (num > 0) {
   System.out.println("The number is positive!");
} else if (num < 0) {
   System.out.println("The number is negative!");
} else {
   System.out.println("The number is zero!");
}
```
This program will print "The number is zero!" since the condition "num == 0" is true.

Example 5: Ternary operator 
```
int num = 5;
String message = (num % 2 == 0) ? "The number is even" : "The number is odd";
System.out.println(message);
```
This program will print "The number is odd" since the condition "num % 2 == 0" is false.

Example 6: Multiple conditions 
```
int num = 10;
if (num > 0 && num % 2 == 0) {
   System.out.println("The number is positive and even!");
}
```
This program will print "The number is positive and even!" since both conditions "num > 0" and "num % 2 == 0" are true.

Example 7: Short-circuit evaluation 
```
int num = 0;
if (num != 0 && 10/num > 1) {
   System.out.println("The number is not zero and does not divide into 10!");
}
```
This program will not print anything since the first condition "num != 0" is false and the second condition is not evaluated due to short-circuiting.

Example 8: Boolean expression 
```
boolean isPositive = true;
if (isPositive) {
   System.out.println("The number is positive!");
}
```
This program will print "The number is positive!" since the boolean variable "isPositive" is true.

Example 9: String comparison 
```
String name = "Alice";
if (name.equals("Bob")) {
   System.out.println("The person's name is Bob!");
} else if (name.equals("Alice")) {
   System.out.println("The person's name is Alice!");
}
```
This program will print "The person's name is Alice!" since the string variable "name" equals "Alice".

Example 10: Character comparison 
```
char grade = 'B';
if (grade >= 'A' && grade <= 'C') {
   System.out.println("The student passed!");
}
```
This program will print "The student passed!" since the character variable "grade" falls within the range of 'A' to 'C'.

Example 11: Checking for null 
```
String name = null;
if (name == null) {
   System.out.println("The name is not specified!");
}
```
This program will print "The name is not specified!" since the string variable "name" is null.

Example 12: Checking for equality of two objects 
```
String name1 = "Alice";
String name2 = new String("Alice");
if (name1.equals(name2)) {
   System.out.println("The names match!");
}
```
This program will print "The names match!" since the contents of the two string objects "name1" and "name2" are the same.

Example 13: Checking for inequality 
```
int num = 3;
if (num != 0) {
   System.out.println("The number is not zero!");
}
```
This program will print "The number is not zero!" since the variable "num" is not equal to 0.

Example 14: Numeric comparison 
```
double num1 = 2.5;
double num2 = 3.0;
if (num1 < num2) {
   System.out.println("num1 is less than num2!");
}
```
This program will print "num1 is less than num2!" since the variable "num1" is less than "num2".

Example 15: Checking for a file 
```
File file = new File("example.txt");
if (file.exists()) {
   System.out.println("The file exists!");
}
```
This program will print "The file exists!" if the file "example.txt" exists in the current directory.

Example 16: Checking the length of an array 
```
int[] nums = {1, 2, 3, 4, 5};
if (nums.length > 3) {
   System.out.println("The array has more than 3 elements!");
}
```
This program will print "The array has more than 3 elements!" since the length of the array "nums" is greater than 3.

Example 17: Checking for divisibility 
```
int num = 6;
if (num % 3 == 0 && num % 2 == 0) {
   System.out.println("The number is divisible by both 2 and 3!");
}
```
This program will print "The number is divisible by both 2 and 3!" since the variable "num" is divisible by both 2 and 3.

Example 18: Checking if a number is prime 
```
int num = 5;
boolean isPrime = true;
for (int i = 2; i <= num/2; i++) {
   if (num % i == 0) {
      isPrime = false;
      break;
   }
}
if (isPrime) {
   System.out.println(num + " is a prime number!");
} else {
   System.out.println(num + " is not a prime number!");
}
```
This program will print "5 is a prime number!" since the variable "num" is a prime number.

Example 19: Using logical OR 
```
int num = 7;
if (num % 2 == 0 || num % 5 == 0) {
   System.out.println("The number is divisible by either 2 or 5!");
}
```
This program will not print anything since the variable "num" is not divisible by either 2 or 5.

Example 20: Using "if" statement inside a loop 
```
int[] nums = {1, 2, 3, 4, 5};
for (int i = 0; i < nums.length; i++) {
   if (nums[i] % 2 == 0) {
      System.out.println(nums[i] + " is even!");
   }
}
```
This program will print "2 is even!" and "4 is even!" since those two numbers in the array "nums" are even.