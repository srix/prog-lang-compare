In PHP, you can get the index of an element in an array using the `array_search()` function. The `array_search()` function returns the key of the first matched element in the array. Here's an example:

```php
$fruits = array("apple", "banana", "cherry");

$index = array_search("banana", $fruits);

echo "The index of banana is: " . $index;

//Output: The index of banana is: 1
```

In this example, we have an array of fruits and we want to get the index of the banana element. We use the `array_search()` function to search for the banana element in the fruits array and assign the returned index to the `$index` variable. Finally, we print the result.

If the element you are searching for is not found in the array, the `array_search()` function will return `false`. In that case, you can check for the `false` value to confirm if the element is not present in the array. Here's an example:

```php
$fruits = array("apple", "banana", "cherry");

$index = array_search("pear", $fruits);

if ($index !== false) {
  echo "The index of pear is: " . $index;
} else {
  echo "Pear not found in the fruits array!";
}

//Output: Pear not found in the fruits array!
```

In this example, we are searching for the "pear" element in the fruits array which is not present in the array. Therefore `array_search()` will return `false`. We use an `if` condition to check if the returned value is not equal to `false` and print the result accordingly.