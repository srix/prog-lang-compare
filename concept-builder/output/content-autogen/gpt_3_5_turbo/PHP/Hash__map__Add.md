In PHP, we can add an element to a hash (also known as an associative array) using the array key as the index. Here is an example:

```php
// declare an empty hash
$hash = array();

// add an element to the hash with key "name" and value "John"
$hash["name"] = "John";

// add another element to the hash with key "age" and value 30
$hash["age"] = 30;

// print the hash to see the output
print_r($hash);
```

Output:
```
Array
(
    [name] => John
    [age] => 30
)
```

In the example above, we declared an empty hash and added two elements to it using the keys "name" and "age". The hash resembles a dictionary where each key represents a unique value. We can access the values using the keys as follows:

```php
echo $hash["name"]; // Output: John
echo $hash["age"];  // Output: 30
``` 

We can also use the `array()` constructor to add elements to a hash as follows:

```php
// add elements to a hash using the array() constructor
$hash = array(
    "name" => "John",
    "age" => 30
);

// print the hash to see the output
print_r($hash);
```

Output:
```
Array
(
    [name] => John
    [age] => 30
)
```

In this example, we added the same elements to the hash using the `array()` constructor and specified each key-value pair using the `=>` operator.