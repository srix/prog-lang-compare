Unfortunately, Java does not have a `struct` keyword like in some other programming languages. However, you can achieve similar functionality in different ways. 

One way is to use classes in Java to create a data structure that stores related data members, just like in `struct` in other programming languages. Here's an example:

```
public class Person {
   String name;
   int age;
   double height;
}

//Creating an instance of the Person class
Person john = new Person();
john.name = "John";
john.age = 30;
john.height = 6.1;
```

This creates a `Person` class with three data members `name`, `age`, and `height`, and then instantiates `john` as a new `Person` object and sets the three data members.

Another way to achieve similar functionality is to use a `HashMap` or `Hashtable` to store related data members. Here's an example:

```
import java.util.HashMap;

public class Employee {
   HashMap<String, Object> attributes;
   
   public Employee(String name, int age, int id) {
      attributes = new HashMap<String, Object>();
      attributes.put("name", name);
      attributes.put("age", age);
      attributes.put("id", id);
   }
}

//Creating an instance of the Employee class
Employee bob = new Employee("Bob", 28, 123);
```

In this example, the `Employee` class has a `HashMap` called `attributes` that stores related data members, and the `Employee` constructor sets the values in the `HashMap`. The advantage of using a `HashMap` is that it can store data members of different data types.

In summary, Java does not have a `struct` keyword, but you can use classes or `HashMaps` to achieve similar functionality.