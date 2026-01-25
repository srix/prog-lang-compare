In Java, a HashMap is a common implementation of a hash. You can use the `containsKey()` method of the HashMap class to check if a hash includes a key or not. This method returns a boolean value, i.e., true if the hash contains the key or false if the hash does not contain the key.

Here's an example:

```
import java.util.HashMap;

public class HashExample {
   public static void main(String[] args) {
      // create a hash map
      HashMap<String, Integer> map = new HashMap<>();

      // add key-value pairs to the hash map
      map.put("apple", 1);
      map.put("banana", 2);
      map.put("orange", 3);

      // check if the hash map contains a specific key
      boolean result = map.containsKey("apple");
      System.out.println("The hash map contains apple key: " + result);

      result = map.containsKey("grapes");
      System.out.println("The hash map contains grapes key: " + result);
   }
}
```

In this example, we created a HashMap object and added some key-value pairs to it. Then, we used the `containsKey()` method to check if the hash map contains the keys "apple" and "grapes". The output of the program shows that the hash contains the "apple" key but not the "grapes" key.

Output:

```
The hash map contains apple key: true
The hash map contains grapes key: false
```