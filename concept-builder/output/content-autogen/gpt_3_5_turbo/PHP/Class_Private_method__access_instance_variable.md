In PHP, a private method can access instance variables using the "this" keyword. The "this" keyword refers to the current object, and private variables can only be accessed from within the class itself.

Here's an example:

```
class MyClass {
  private $myVar;

  public function myMethod() {
    $this->myVar = "Hello World"; // Set value of private variable
    $this->myPrivateMethod(); // Call private method
  }

  private function myPrivateMethod() {
    echo $this->myVar; // Access private variable
  }
}

$obj = new MyClass();
$obj->myMethod(); // Output: "Hello World"
```

In this example, we have a class called "MyClass" with a private variable called "myVar". The "myMethod" public method sets the value of "myVar" to "Hello World" and then calls the private method "myPrivateMethod". The "myPrivateMethod" method accesses the value of "myVar" using the "this" keyword and echos it. 

When we create a new object of the "MyClass" class and call the "myMethod" method, it outputs "Hello World" because the private method is able to access the private variable.