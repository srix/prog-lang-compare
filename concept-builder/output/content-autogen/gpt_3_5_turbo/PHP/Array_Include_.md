To check if an array includes an element in PHP, you can use the in_array() function. This function takes two arguments - the first is the search value and the second is the array. It returns true if the value is found in the array, and false otherwise.

Here's an example of how to use in_array():

```php
// Define an array of fruits
$fruits = array("apple", "banana", "orange", "pear");

// Check if "apple" is in the array
if (in_array("apple", $fruits)) {
    echo "The array includes an apple.";
} else {
    echo "The array does not include an apple.";
}
```

This will output "The array includes an apple."

You can also check if an array includes an element using a conditional statement:

```php
// Define an array of numbers
$numbers = array(1, 2, 3, 4, 5);

// Check if 6 is in the array
if (in_array(6, $numbers)) {
    echo "The array includes 6.";
} else {
    echo "The array does not include 6.";
}
```

This will output "The array does not include 6."