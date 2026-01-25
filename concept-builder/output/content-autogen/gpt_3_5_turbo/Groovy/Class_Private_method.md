In Groovy, private methods are used to encapsulate behaviors that should not be accessible from outside the class. Private methods can only be accessed within the class in which they are defined. 

Here is an example of how to define and use private methods in Groovy:

```
class MyClass {
   private def add(num1, num2) {
      return num1 + num2
   }
   
   def multiply(num1, num2) {
      return add(num1, num2) * num1 * num2
   }
}

def test = new MyClass()

assert test.multiply(2, 3) == 30 // This will pass
assert test.add(2, 3) == null // This will fail because add() is private
```

In this example, the `add()` method is defined as private, so it can only be accessed within the `MyClass` class. The `multiply()` method calls the `add()` method to perform a calculation, which can be accessed from outside the class.

Note that attempting to access the `add()` method from outside the class will result in a runtime error.