In Java, assigning "this" or "that" is referred to as assigning values to variables. Here are some examples of how to do so:

1. Assigning a value to a variable named "this" in Java:

```
int this = 5;
System.out.println(this); // Outputs 5 to the console
```

2. Assigning a value to a variable named "that" in Java:

```
int that = 10;
System.out.println(that); // Outputs 10 to the console
```

Note that you cannot use certain reserved words like "this" as variable names in Java. However, if you're working with instances of a class, "this" can be used to refer to the current instance. For example:

```
public class MyClass {
   private int value;
   
   public void setValue(int value) {
      this.value = value; // uses "this" to refer to the current instance of MyClass
   }
   
   public int getValue() {
      return this.value; // also uses "this" to refer to the current instance
   }
}
``` 

In this example, "this" is used to refer to the instance of the class that the method is being called on. So if we create an instance of MyClass and call setValue(), "this.value" will refer to the "value" variable for that particular instance. Similarly, calling getValue() on the same instance will return the value we set earlier because it's accessing "this.value".