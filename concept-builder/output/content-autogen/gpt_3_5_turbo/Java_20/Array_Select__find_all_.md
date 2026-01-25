To find all the elements of an array satisfying a condition in Java 20, you can use the Java Streams API. 

Here's an example code snippet to demonstrate this:

```java
import java.util.Arrays;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Create an array of integers
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        // Find all elements of the array which are greater than 5
        int[] filteredNumbers = Arrays.stream(numbers)
                .filter(n -> n > 5)
                .toArray();

        // Print the filtered array
        System.out.println(Arrays.toString(filteredNumbers));

        // Find all elements of the array which are even
        int[] evenNumbers = Arrays.stream(numbers)
                .filter(n -> n % 2 == 0)
                .toArray();

        // Print the array with even numbers
        System.out.println(Arrays.toString(evenNumbers));
        
        // Find all elements of the array which are less than 5 and greater than 2
        int[] betweenTwoAndFive = Arrays.stream(numbers)
                .filter(n -> n > 2 && n < 5)
                .toArray();

        // Print the array with numbers between 2 and 5
        System.out.println(Arrays.toString(betweenTwoAndFive));
    }
}
```

Output:

```
[6, 7, 8, 9, 10] // Filtered array with numbers greater than 5
[2, 4, 6, 8, 10] // Filtered array with even numbers
[3, 4] // Filtered array with numbers between 2 and 5
```

In the code above, we use the `Arrays.stream()` method to create a stream of elements from the array, and then we use the `filter()` method to apply the condition to each element in the stream. Finally, we use the `toArray()` method to convert the filtered stream back into an array.