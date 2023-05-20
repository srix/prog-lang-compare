In Java 20, get/set methods are used to access private data members of a class. These methods provide a level of abstraction to the class data members and encapsulate the data from the outside world. Let's look at an example:

```java
public class Student {
    private String name;
    private int id;
    
    //getters
    public String getName() {
        return name;
    }
    public int getId() {
        return id;
    }
    
    //setters
    public void setName(String name) {
        this.name = name;
    }
    public void setId(int id) {
        this.id = id;
    }
}
```

In the above example, we have a class Student with two private data members - `name` and `id`. To access these variables from outside the class, we create getter methods (`getName()` and `getId()`) and setter methods (`setName()` and `setId()`).

Let's look at how these methods can be used in a main method:

```java
public static void main(String[] args) {
    Student s = new Student();
    s.setName("John");
    s.setId(1234);
    
    System.out.println("Name: " + s.getName()); //Output: Name: John
    System.out.println("ID: " + s.getId()); //Output: ID: 1234
}
```

In the main method, we create an object of the Student class and use the setter methods to set the name and id values. We then use the getter methods to retrieve these values and print them to the console.

Overall, get/set methods provide a safe and controlled way to access and manipulate private data members of a class in Java 20.