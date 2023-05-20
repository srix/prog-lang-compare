In Java, a private method is a method defined within a class that can only be accessed by other methods within the same class. This means that private methods cannot be accessed from outside the class, including from any subclasses. 

Here is an example of using a private method in Java:

```
public class ExampleClass {
   private int num1;
   private int num2;

   public ExampleClass(int num1, int num2) {
      this.num1 = num1;
      this.num2 = num2;
   }

   private int sum() {
      return num1 + num2;
   }

   public void printSum() {
      System.out.println("The sum is: " + sum());
   }
}
```

In this example, `sum()` is a private method that calculates the sum of `num1` and `num2`. We then use this private method in the `printSum()` method, which can be accessed from outside the class. When `printSum()` is called, it calls `sum()` to calculate the sum and prints it to the console.

To summarize, private methods are useful for keeping implementation details hidden from outside classes, and can only be accessed from within the same class.