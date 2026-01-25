In PHP, a struct can be created using the class keyword. A struct is essentially a custom data type that allows us to define a group of related variables and methods.

Here is an example of how we can use struct in PHP:

```php
class Person {
  public $name;
  public $age;
  public $gender;

  public function __construct($name, $age, $gender) {
    $this->name = $name;
    $this->age = $age;
    $this->gender = $gender;
  }

  public function introduce() {
    echo "Hi, my name is " . $this->name . " and I am " . $this->age . " years old. I am " . $this->gender;
  }
}

//Creating a new object of struct Person
$person = new Person("John", 25, "male");

//Calling the introduce method to print details
$person->introduce();
```

In the above example, we defined a struct named Person with three properties: name, age, and gender. We also defined a constructor method to initialize these properties with given values. We also defined one more method `introduce()` which prints an introduction of the person.

We then created a new object of the Person struct using the `new` keyword and passed the initial values while initiating the struct. Finally, we called the `introduce()` method on the person object to print the details of that person.

This is just a simple example of using structs in PHP. We can define as many properties and methods in the struct as we want, and use it wherever we need to store and manipulate related pieces of data.