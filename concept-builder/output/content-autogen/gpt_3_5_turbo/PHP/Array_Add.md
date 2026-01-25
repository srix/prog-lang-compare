To add an element to an array in PHP, you can use either the `array_push()` function or assign the value to a new index in the array. Here are some examples:

Using `array_push()`:

```php
// Initializing array
$myArray = array("apple", "banana", "orange");

// Adding a new element using array_push()
array_push($myArray, "grapefruit");

// Outputting the new array
print_r($myArray);
```

Output:
```
Array (
    [0] => apple
    [1] => banana
    [2] => orange
    [3] => grapefruit
)
```

Using a new index:
```php
// Initializing array
$myArray = array("apple", "banana", "orange");

// Adding a new element using a new index
$myArray[3] = "grapefruit";

// Outputting the new array
print_r($myArray);
```

Output:
```
Array (
    [0] => apple
    [1] => banana
    [2] => orange
    [3] => grapefruit
)
```

In both cases, the new element "grapefruit" is added to the end of the array.