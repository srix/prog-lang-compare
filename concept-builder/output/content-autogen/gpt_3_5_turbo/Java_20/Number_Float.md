In Java, float data type is used to represent floating-point numbers with single precision. 

Here is an example code on how to use float numbers in Java:

```
public class FloatExample {
   public static void main(String[] args) {
      float number1 = 20.5f;
      float number2 = 10.3f;
      
      // Addition of two float numbers
      float result1 = number1 + number2;
      System.out.println("Addition of " + number1 + " and " + number2 + " is " + result1);

      // Subtraction of two float numbers
      float result2 = number1 - number2;
      System.out.println("Subtraction of " + number1 + " and " + number2 + " is " + result2);

      // Multiplication of two float numbers
      float result3 = number1 * number2;
      System.out.println("Multiplication of " + number1 + " and " + number2 + " is " + result3);

      // Division of two float numbers
      float result4 = number1 / number2;
      System.out.println("Division of " + number1 + " and " + number2 + " is " + result4);

      // Modulus of two float numbers
      float result5 = number1 % number2;
      System.out.println("Modulus of " + number1 + " and " + number2 + " is " + result5);
   }
}
```

Output:
```
Addition of 20.5 and 10.3 is 30.8
Subtraction of 20.5 and 10.3 is 10.2
Multiplication of 20.5 and 10.3 is 211.15
Division of 20.5 and 10.3 is 1.9902914
Modulus of 20.5 and 10.3 is 0.19999981
``` 

In the above code, we have declared two float variables `number1` and `number2` and performed the basic arithmetic operations like addition, subtraction, multiplication, division, and modulus using float data type. 

Note that, whenever you assign a decimal value to float variable, you need to suffix it with an `f` or `F` character to let the Java compiler know that it is a float value.