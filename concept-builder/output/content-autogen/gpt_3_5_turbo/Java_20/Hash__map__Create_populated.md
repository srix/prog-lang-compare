In Java 20, we create a hash using the HashMap class. Here is an example of creating a hash in Java:

```java
import java.util.HashMap;

public class ExampleHashMap {
    public static void main(String[] args) {
        HashMap<String, Integer> myHashMap = new HashMap<>();
        myHashMap.put("apple", 1);
        myHashMap.put("orange", 2);
        myHashMap.put("banana", 3);
        System.out.println(myHashMap);
    }
}
```

In this example, we create a new HashMap object called `myHashMap`. We add three key-value pairs to our hash using the `put()` method. Finally, we use `println()` to display the entire HashMap. When we run this program, the output will be:

```
{orange=2, banana=3, apple=1}
```

Note that the order of the key-value pairs might be different than the order in which they were added. This is because HashMap does not maintain the order of keys. We can access the value of a key using the `get()` method, like so:

```java
int value = myHashMap.get("apple");
System.out.println(value);
```

This will output `1`, the value corresponding to the key "apple".