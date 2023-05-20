In Java, instance variables can be accessed in private methods using getter and setter methods. 

Here is an example:

```
public class Person {
   private String name;
   private int age;

   private void printDetails() {
      System.out.println("Name: " + getName() + ", Age: " + getAge());
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public int getAge() {
      return age;
   }

   public void setAge(int age) {
      this.age = age;
   }
}
```

In this example, the `printDetails` method is private and cannot access the instance variables `name` and `age` directly. Instead, it uses the getter methods `getName` and `getAge` to retrieve the values of these variables and then prints them.

It is important to note that private methods can only be accessed within the same class and cannot be accessed from outside the class, even if those methods have access to instance variables.