Getters and setters are methods used to control access or modify the properties of an object. Here's an example of how to use them in PHP:

```php
class Person {
  private $name;
  private $age;

  public function getName() {
    return $this->name;
  }

  public function setName($name) {
    $this->name = $name;
  }

  public function getAge() {
    return $this->age;
  }

  public function setAge($age) {
    $this->age = $age;
  }
}

// Create an instance of the Person class
$person = new Person();

// Set the name and age using the setters
$person->setName("John Doe");
$person->setAge(30);

// Get the name and age using the getters
echo "Name: " . $person->getName() . "<br>";
echo "Age: " . $person->getAge();
```

In this example, the `Person` class has two private properties, `name` and `age`, and four methods, `getName()`, `setName()`, `getAge()`, and `setAge()`. The `setName()` and `setAge()` methods are used to set the values of the private properties, while the `getName()` and `getAge()` methods are used to retrieve the values of the private properties. 

Using getters and setters can be useful for controlling access to an object's properties and ensuring that they are set correctly.