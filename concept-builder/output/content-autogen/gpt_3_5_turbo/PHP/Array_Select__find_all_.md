To find all elements of an array satisfying a condition in PHP, you can use the array_filter() function. This function can be used to traverse through every element of an array and return all those elements that satisfy a given condition.

Here is an example of how to find all elements of an array satisfying a condition in PHP:

```php
$numbers = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Function to filter even numbers
function filterEven($num) {
    return ($num % 2 == 0);
}

// Filter the array to retrieve even numbers
$evenNumbers = array_filter($numbers, "filterEven");

// Displaying the even numbers
echo "Even numbers are: ";
print_r($evenNumbers);
```

Output:
```
Even numbers are: Array ( [1] => 2 [3] => 4 [5] => 6 [7] => 8 [9] => 10 )
```

In this example, we created an array of numbers and defined a function `filterEven` to check whether a number is even or not. Then, we used the `array_filter()` function to filter the array `$numbers` and return all the even numbers as `$evenNumbers`. Finally, we printed the results with the `print_r()` function.