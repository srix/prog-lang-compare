To count the number of elements in an array matching a condition in PHP, you can use the `array_filter()` function along with the `count()` function. The `array_filter()` function accepts a callback function that defines the condition, and returns a new array containing only the elements that satisfy the condition. You can then pass this new array to the `count()` function to get the number of elements.

Here's an example that shows how to count the number of even numbers in an array:

```
$numbers = array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Define the condition using a callback function
function is_even($n) {
    return ($n % 2 == 0);
}

// Use array_filter() to get only even numbers
$even_numbers = array_filter($numbers, "is_even");

// Count the number of even numbers
$count_even_numbers = count($even_numbers);

echo "There are " . $count_even_numbers . " even numbers in the array";
```

Output:
```
There are 5 even numbers in the array
``` 

In this example, we define a callback function `is_even()` that checks if a number is even or not. We then use the `array_filter()` function to filter out only the even numbers from the `$numbers` array. Finally, we use the `count()` function to get the count of even numbers.