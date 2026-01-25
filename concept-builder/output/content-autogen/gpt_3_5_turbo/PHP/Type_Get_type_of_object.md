In PHP, there are multiple ways to get the type of an object:

1. Using the gettype() function: 
This function returns a string that contains the type of the given variable. Here's an example:

```
$var = 10;
echo gettype($var); // Outputs "integer"

$arr = array();
echo gettype($arr); // Outputs "array"
```

2. Using the instanceof operator:
This operator checks if an object is an instance of a specific class. Here's an example:

```
class MyClass {
    function myFunction() {
    }
}

$obj = new MyClass();
if ($obj instanceof MyClass) {
    echo 'This is an instance of MyClass';
}
```

3. Using the is_* functions:
PHP has a set of functions that start with "is_" that can also be used to check a variable's type. Here are some examples:

```
$value = "Hello World";
if (is_string($value)) {
    echo "This is a string!";
}

$obj = new stdClass();
if (is_object($obj)) {
    echo "This is an object!";
}

$num = 123;
if (is_numeric($num)) {
    echo "This is a number!";
}
```

These are some of the common ways to get the type of an object in PHP.