In PHP, a field in a class is also known as a property. It is used to store a value for an instance of the class. You can access it using the object notation (->) together with the name of the property.

Here's an example:

```php
class Car {
    public $model;
    public $color;
}

// Creating an object of the Car class
$car1 = new Car();

// Assigning values to the properties of the object
$car1->model = "Toyota";
$car1->color = "Blue";

// Accessing the properties
echo "Car Model: " . $car1->model . "<br>";
echo "Car Color: " . $car1->color;
```

In this example, we have defined a class called `Car` with two public properties: `$model` and `$color`. We then created an object of the `Car` class using the `new` keyword and assigned values to its properties using the object notation. Finally, we accessed the properties of the object using the object notation and displayed their values using `echo`.

The output of this example will be:

```
Car Model: Toyota
Car Color: Blue
```

You can also set default values for properties using a constructor, like this:

```php
class Car {
    public $model;
    public $color;
    
    public function __construct($model, $color) {
        $this->model = $model;
        $this->color = $color;
    }
}

// Creating an object of the Car class 
$car2 = new Car("Honda", "Red");

// Accessing the properties
echo "Car Model: " . $car2->model . "<br>";
echo "Car Color: " . $car2->color;
```

In this example, we have added a constructor to the `Car` class that takes two parameters: `$model` and `$color`. The constructor sets the values of the properties using the `$this` keyword. We then created a new object of the `Car` class and passed values to the constructor. Finally, we accessed the properties of the object using the object notation and displayed their values using `echo`.

The output of this example will be:

```
Car Model: Honda
Car Color: Red
```