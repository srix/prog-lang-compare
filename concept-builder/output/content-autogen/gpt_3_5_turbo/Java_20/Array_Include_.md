In Java, we can use the `Arrays` class' `asList()` method to convert the array into a list and then use the `contains()` method of the `List` interface to check if an array includes an element. Here's an example:

```
import java.util.Arrays;
import java.util.List;

public class ArrayIncludesElementExample {
    public static void main(String[] args) {
        // create an array of integers
        int[] numbers = {1, 2, 3, 4, 5};

        // convert array to list
        List<Integer> numberList = Arrays.asList(numbers);

        // check if list contains an element
        boolean containsElement = numberList.contains(3);

        // print result
        if(containsElement) {
            System.out.println("The array contains the element 3.");
        } else {
            System.out.println("The array does not contain the element 3.");
        }
    }
}
```

In the above example, we first create an array of integers. Then, we convert the array to a list using the `Arrays.asList()` method. We then use the `contains()` method of the `List` interface to check if the list contains an element, in this case, `3`. Finally, we print the result.

If we want to check for an element in an array of strings, we can use the same approach, like this:

```
import java.util.Arrays;
import java.util.List;

public class ArrayIncludesElementExample {
    public static void main(String[] args) {
        // create an array of strings
        String[] fruits = {"apple", "banana", "orange"};

        // convert array to list
        List<String> fruitList = Arrays.asList(fruits);

        // check if list contains an element
        boolean containsElement = fruitList.contains("banana");

        // print result
        if(containsElement) {
            System.out.println("The array contains the element 'banana'");
        } else {
            System.out.println("The array does not contain the element 'banana'");
        }
    }
}
```

In this case, we create an array of strings called `fruits`, convert it to a list, and check if the list contains the string `"banana"`. We then print the result, just like in the previous example.