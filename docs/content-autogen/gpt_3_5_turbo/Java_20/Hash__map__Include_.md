In Java, we use the HashMap class to store key-value pairs. We can check if a certain key exists in the HashMap using the containsKey() method. Here's an example:

```java
import java.util.HashMap;

public class HashExample {
   public static void main(String[] args) {
      // creating a HashMap object
      HashMap<String, Integer> marks = new HashMap<>();

      // adding elements to the HashMap
      marks.put("John", 90);
      marks.put("Mike", 80);
      marks.put("Sarah", 70);

      // checking if a key exists
      if (marks.containsKey("Mike")) {
         System.out.println("Mike's score is " + marks.get("Mike"));
      } else {
         System.out.println("Mike's score not found");
      }
   }
}
```

Output:
```
Mike's score is 80
```

In this example, we have created a HashMap object named "marks" which stores the marks of three students. We then use the containsKey() method to check if the key "Mike" exists in the HashMap. Since it does, we print out "Mike's score is 80". If the key did not exist, we would have printed out "Mike's score not found".