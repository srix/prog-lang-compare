To find the first element of an array in PHP, you can use the array_shift() function. This function shifts the first element off an array and returns it. Here's an example:

```
<?php
$myArray = array("apple", "banana", "cherry");
$firstElement = array_shift($myArray);
echo $firstElement; // Output: apple
?>
```

In this example, we have an array $myArray with three elements. We then use the array_shift() function to remove the first element ("apple") and assign it to a variable $firstElement. Finally, we echo out the value of $firstElement. The output will be "apple", which is the first element of the array.

It's important to note that using array_shift() modifies the original array by removing the first element. If you need to keep the original array intact, you can make a copy of it and work with the copy instead.