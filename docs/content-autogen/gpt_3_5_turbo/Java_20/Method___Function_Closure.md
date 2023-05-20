In Java, a closure is a function that has access to variables that are not in its parameter list. In other words, a closure is a function which can remember the values of variables that were in scope when the closure was created, even if those variables are no longer in scope when the closure is called. 

Here is an example of how to use closure in Java:

```java
interface Counter {
   void increment();
   int getCount();
}

public class ClosureExample {
   public static void main(String[] args) {
      Counter counter = createCounter();
      counter.increment();
      counter.increment();
      System.out.println("Count: " + counter.getCount());
   }
   
   public static Counter createCounter() {
      int count = 0;
      
      return new Counter() {
         public void increment() {
            count++;
         }
         
         public int getCount() {
            return count;
         }
      };
   }
}
```

In the above example, we are creating a closure using an anonymous inner class. The `createCounter()` method returns an instance of an anonymous inner class that implements the `Counter` interface. The `count` variable is defined in the scope of the `createCounter()` method, but it is also accessible within the anonymous inner class. 

When we call `counter.increment()` twice, the `count` variable is incremented twice within the anonymous inner class. The value of `count` is then returned when we call `counter.getCount()`, giving us the value 2 in this case.

This is just one example of how closures can be used in Java. They are powerful tools for encapsulating code and creating more expressive and functional programs.