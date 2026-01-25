Inheritance is one of the important features of object-oriented programming (OOP). It allows a class to inherit the properties and behaviors of another class. In PHP, you can use the keyword `extends` to establish an inheritance relationship between classes. Here is an example:

```
class Animal {
  protected $name;
  protected $type;
  
  public function __construct($name, $type) {
    $this->name = $name;
    $this->type = $type;
  }
  
  public function getName() {
    return $this->name;
  }
  
  public function getType() {
    return $this->type;
  }
}

class Dog extends Animal {
  public function bark() {
    echo "Woof!";
  }
}

// Create a new Dog object
$myDog = new Dog("Max", "Canine");

// Call the getName() method inherited from Animal class
echo $myDog->getName(); // Output: Max

// Call the bark() method from Dog class
$myDog->bark(); // Output: Woof!
```

In this example, we have a parent class `Animal` that has two properties (`$name` and `$type`) and two methods (`__construct()` and `getName()`). The child class `Dog` extends the parent class `Animal` and adds a new method `bark()`. 

When we create a new `Dog` object, we can call the `getName()` method inherited from the `Animal` class. We can also call the `bark()` method from the `Dog` class.

Note that the `protected` keyword is used to make the properties of the `Animal` class accessible within the child `Dog` class, but not outside the class hierarchy.