In PHP, a private method is a method that can only be accessed within the class it is defined in. Private methods cannot be accessed from outside the class or its subclasses. Here's an example of how to use a private method in PHP:

```
class MyClass {
   private function myPrivateFunction($param) {
      //Some code
   }
   
   public function myPublicFunction($param) {
      //Calling the private function
      $this->myPrivateFunction($param);
   }
}

//Creating the MyClass object
$myObj = new MyClass();

//Calling the public function
$myObj->myPublicFunction($param);
```

In this example, we have defined a class named `MyClass` with a private method `myPrivateFunction()` and a public function `myPublicFunction()`. The `myPrivateFunction()` method can only be accessed within the class and cannot be called from outside the class.

The `myPublicFunction()` method is a public function that can be called from outside the class. Within the public function, we're calling the private method by using `$this->myPrivateFunction()`.

To use a private method in PHP, you need to create an instance of the object and call the public function that in turn calls the private method. This way, you can access the private method indirectly without calling it directly from outside the class.