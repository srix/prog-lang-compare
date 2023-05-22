In PHP, a constructor is a special method that gets called automatically when an object is created from a class. It is used to initialize the properties of the object.

To create a constructor in PHP, you define a method with the same name as the class, preceded by double underscores (__construct).

Here's an example of a class with a constructor:

```
class Person {
  public $name;
  public $age;
  
  public function __construct($name, $age) {
    $this->name = $name;
    $this->age = $age;
  }
  
  public function greet() {
    echo "Hello, my name is " . $this->name . " and I am " . $this->age . " years old.";
  }
}

$person = new Person("John", 30);
$person->greet(); // Output: Hello, my name is John and I am 30 years old.
```

In this example, the constructor takes two parameters ($name and $age) and initializes the corresponding properties of the object using the `$this` keyword. The `greet()` method simply outputs a string containing the person's name and age.

When we create a new `Person` object, we pass in two arguments (John and 30) that are used to initialize the object's properties. Finally, we call the `greet()` method on the object to output the person's name and age.