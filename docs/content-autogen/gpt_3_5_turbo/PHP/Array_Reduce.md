In PHP, you can use the `array_reduce` function to reduce an array to a single value. The `array_reduce` function iteratively reduces an array to a single value by applying a callback function to each element. 

The callback function should accept two parameters: the current value and the next value in the array. The function should return the new value based on the current value and the next value. 

Here is an example of using `array_reduce` to sum up the values of an array:

```php
$numbers = [1, 2, 3, 4, 5];

$sum = array_reduce($numbers, function ($accumulator, $currentValue) {
    return $accumulator + $currentValue;
}, 0);

echo $sum; // Output: 15
```

In the example above, we first define an array of numbers. We then use `array_reduce` to iterate through the array and compute the sum of all numbers. 

The callback function adds the current value to the accumulator, which starts at 0. The final output of `array_reduce` is the total sum of the array, which is 15 in this case. 

Another example of using `array_reduce` is to combine an array of strings into a single string:

```php
$words = ['hello', 'world', 'this', 'is', 'PHP'];

$phrase = array_reduce($words, function ($accumulator, $currentValue) {
    return $accumulator . ' ' . $currentValue;
}, '');

echo $phrase; // Output: hello world this is PHP
```

In this example, we use `array_reduce` to combine all the strings in the array into a single string with spaces between each word. The callback function concatenates the current value to the accumulator with a space in between. The final output is a string containing all the words in the array.