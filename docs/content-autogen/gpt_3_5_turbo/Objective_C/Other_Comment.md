In Objective-C, you can use two different styles to add comments to your code:

1. Single-line comments: These comments start with two forward slashes (//) and extend up to the end of the line. They are used to add brief comments or explanations of individual lines of code. For example:

```
int a = 5; // Assign value of 5 to variable a
```

2. Multi-line comments: These comments start with /* and end with */ and can span across multiple lines. They are used for longer comments, such as adding a description for the purpose of a method, or providing instructions for others working on the same code. Here's an example:

```
/* This method calculates the sum of two numbers
   and returns the result. 

   Parameters:
   num1 - the first number to be added
   num2 - the second number to be added

   Returns:
   The sum of num1 and num2
*/
-(int)calculateSum:(int)num1 withNum2:(int)num2{
    int sum = num1 + num2;
    return sum;
}
```

By adding comments to your code, you can make it easier for other developers to understand what your code does and how it works.