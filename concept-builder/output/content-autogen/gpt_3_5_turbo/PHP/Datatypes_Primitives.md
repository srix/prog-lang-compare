In PHP, primitive types refer to the basic data types that the language supports. These are the types of data that are fundamental to any program and are the building blocks for complex data structures.

The following are the primitive data types in PHP:

1. Integer: An integer is a whole number, either positive or negative, that does not contain a decimal point. For example, 1, 2, -3, etc.

``` PHP
$num = 10;
```

2. Float: A float is a number that has a decimal point. It can be either positive or negative. For example, 3.14, -2.5, etc.

``` PHP
$pi = 3.14;
```

3. Boolean: A Boolean represents a binary value, which is either true or false. For example, true or false.

``` PHP
$is_logged_in = true;
```

4. String: A string is a sequence of characters, enclosed in single or double quotes. For example, "Hello World", 'PHP is awesome', etc.

``` PHP
$name = "John";
```

5. Null: Null is a special data type that represents a variable with no value. It is often used to indicate that a variable has not been assigned a value yet. For example,

``` PHP
$var = null;
```

6. Array: An array is a collection of values, which can be of any data type, such as integers, strings, or even other arrays. For example,

``` PHP
$fruits = array("apple", "banana", "orange");
```

7. Object: An object is an instance of a class, which is a blueprint for creating objects. Objects have properties and methods that define their behavior. For example,

``` PHP
class Person {
   public $name;
   public $age;

   public function __construct($name, $age) {
      $this->name = $name;
      $this->age = $age;
   }
}

$person = new Person("John Doe", 30);
```

These are the primitive data types in PHP and they can be used to represent any information that needs to be stored or manipulated in a PHP program.