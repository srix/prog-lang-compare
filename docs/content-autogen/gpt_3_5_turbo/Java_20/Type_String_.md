In Java, you can check if a string is a number by using the `NumberUtils` class from the `Apache Commons Lang` library or by using the `NumberFormatException` class. Here are examples of both methods:

Using NumberUtils class:

```java
import org.apache.commons.lang3.math.NumberUtils;

public class CheckNumberString {
    public static void main(String[] args) {
        String numStr = "123.45";
        boolean isNum = NumberUtils.isCreatable(numStr);
        System.out.println(isNum);
    }
}
```

Output: `true`, because `123.45` is a number.

Using NumberFormatException class:

```java
public class CheckNumberString {
    public static void main(String[] args) {
        String numStr = "abc123";
        try {
            Double.parseDouble(numStr);
            System.out.println("This string is a number.");
        } catch (NumberFormatException e) {
            System.out.println("This string is not a number.");
        }
    }
}
```

Output: `This string is not a number.`, because `abc123` is not a number.

Note that in the second example, we are trying to convert the string to a `Double` and catching the `NumberFormatException` if it occurs, indicating that the string is not a number.