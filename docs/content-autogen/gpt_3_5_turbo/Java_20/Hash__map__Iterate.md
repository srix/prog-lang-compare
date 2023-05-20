Java 20 does not exist and the latest Java version as of November 2021 is Java 17. Nevertheless, I will provide examples on how to iterate over a hash (also known as a HashMap) in Java using both its key-value pairs and its values.

Iterating over the key-value pairs:

```java
import java.util.HashMap;
import java.util.Map;

public class HashIteration {
    public static void main(String[] args) {
        Map<String, Integer> data = new HashMap<>();
        data.put("John", 21);
        data.put("Jane", 19);
        data.put("Joe", 23);
        data.put("Jill", 20);

        for (Map.Entry<String, Integer> entry : data.entrySet()) {
            String name = entry.getKey();
            int age = entry.getValue();
            System.out.println(name + " is " + age + " years old");
        }
    }
}
```

Output:
```
John is 21 years old
Jane is 19 years old
Joe is 23 years old
Jill is 20 years old
```

In this example, the `HashMap` contains names and ages of 4 individuals. To iterate over the key-value pairs in the `HashMap`, we use a `for` loop and the `entrySet()` method of the `HashMap` to get a set of all the key-value pairs. Inside the loop, we get the key and value of each pair using the `getKey()` and `getValue()` methods of the `Map.Entry` class.

Iterating over the values:

```java
import java.util.HashMap;
import java.util.Map;

public class HashIteration {
    public static void main(String[] args) {
        Map<String, Integer> data = new HashMap<>();
        data.put("John", 21);
        data.put("Jane", 19);
        data.put("Joe", 23);
        data.put("Jill", 20);

        for (int age : data.values()) {
            System.out.println(age);
        }
    }
}
```

Output:
```
21
19
23
20
```

To iterate over the values in the `HashMap`, we can use a `for` loop and the `values()` method of the `HashMap` to get a collection of all the values. Inside the loop, we can simply use each value.