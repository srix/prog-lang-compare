In Java, the size of an array can be determined by using the length property. Here's an example code that demonstrates how to get the size of an array in Java:

```
public class ArraySizeExample {
   public static void main(String[] args) {
      int[] numbers = {10, 20, 30, 40, 50};
      System.out.println("Size of the array: " + numbers.length);
   }
}
```
In this example, an integer array called `numbers` is declared and assigned with 5 elements. The `length` property is used to get the size of the array, which is then printed using the `System.out.println` method.

Another example for getting the size of a String array:

```
public class StringArraySizeExample {
   public static void main(String[] args) {
      String[] names = {"John", "Jane", "James", "Jasmine"};
      System.out.println("Size of the array: " + names.length);
   }
}
```
In this example, a String array called `names` is declared and assigned with 4 elements. The `length` property is used to get the size of the array, which is then printed using the `System.out.println` method.