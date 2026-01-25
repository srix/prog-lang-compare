In Groovy, you can declare a method or function using the "def" keyword followed by the name of the method, parameter list (if any), and the method body enclosed within curly braces. Here are two examples:

Example 1: A simple function to calculate the sum of two numbers

```
def sum(int a, int b) {
   return a + b
}
```

In this example, we have declared a function called "sum" that takes two integer parameters - "a" and "b". The function body adds "a" and "b", and the result is returned using the "return" keyword.

Example 2: A method to check if a given number is even or odd

```
def isEven(int num) {
   if(num % 2 == 0) {
      return true
   } else {
      return false
   }
}
```

In this example, we have declared a method called "isEven" that takes an integer parameter - "num". The method body checks if "num" is even or odd using the modulo operator. If "num" is even, "true" is returned; otherwise, "false" is returned.

Overall, declaring a method or function in Groovy is straightforward, similar to Java and other modern programming languages.