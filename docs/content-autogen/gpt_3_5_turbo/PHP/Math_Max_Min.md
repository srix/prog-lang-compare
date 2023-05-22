In PHP, to find the maximum of two numbers, you can use the built-in function `max()`. Similarly, to find out the minimum of two numbers, you can use the built-in function `min()`. 

Here is an example code snippet to demonstrate how we can find the maximum and minimum of two numbers:

```php
$num1 = 20;
$num2 = 10;

// finding the maximum of two numbers using max()
$max = max($num1, $num2);

// finding the minimum of two numbers using min()
$min = min($num1, $num2);

// outputting the results
echo "The maximum of $num1 and $num2 is $max";
echo "<br>";
echo "The minimum of $num1 and $num2 is $min";
```
In the above code, we have two numbers assigned to variables `$num1` and `$num2`. We then use the `max()` and `min()` functions to get the maximum and minimum of these numbers and store the results in variables `$max` and `$min`. Finally, we output the results using the `echo` function. 

The output of the above code will be:

`The maximum of 20 and 10 is 20`

`The minimum of 20 and 10 is 10`