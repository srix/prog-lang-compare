To get the unique elements of an array in PHP, you can use the `array_unique()` function. This function takes an array as its input and returns a new array with only the unique elements.

Here's an example:

```php
$array = array(2, 4, 6, 4, 8, 2);
$unique_array = array_unique($array);

print_r($unique_array);
```

Output:

```
Array
(
    [0] => 2
    [1] => 4
    [2] => 6
    [4] => 8
)
```

As you can see, the `array_unique()` function removes the duplicate elements of the original array and returns a new array with only the unique elements.

You can also use the `SORT_REGULAR` flag as a second argument to `array_unique()` to maintain the original keys of the array. Here's an example:

```php
$array = array(2 => "apple", 4 => "orange", 6 => "banana", 8 => "orange", 10 => "apple");
$unique_array = array_unique($array, SORT_REGULAR);

print_r($unique_array);
```

Output:

```
Array
(
    [2] => apple
    [4] => orange
    [6] => banana
    [10] => apple
)
```

In this example, the `array_unique()` function preserves the keys of the original array and only removes the duplicate values.