In PHP, you can return a value from a function or method using the `return` statement. Here's an example of a function that returns the sum of two numbers:

```
function addNumbers($num1, $num2) {
  $sum = $num1 + $num2;
  return $sum;
}

$result = addNumbers(5, 10);
echo $result; // Outputs 15
```

In this example, the `addNumbers()` function accepts two parameters and calculates their sum. It then uses `return` to return the value of `$sum` back to the caller. 

To assign the returned value to a variable, we call the function and assign its return value to a variable `$result`. Finally, we print it using the `echo` statement.

You can also return other data types, such as arrays, objects, or strings. Here's an example that returns an array of even numbers between a range:

```
function getEvenNumbers($start, $end) {
  $evenNumbers = array();
  for ($i = $start; $i <= $end; $i++) {
    if ($i % 2 === 0) {
      $evenNumbers[] = $i;
    }
  }
  return $evenNumbers;
}

$numbers = getEvenNumbers(1, 10);
print_r($numbers); // Outputs Array ([0] => 2 [1] => 4 [2] => 6 [3] => 8 [4] => 10)
```

In this example, the `getEvenNumbers()` function accepts a starting and ending range and returns an array of even numbers between them. We define an empty array `$evenNumbers` and then loop through each number between `$start` and `$end`. If the number is even, we add it to the `$evenNumbers` array. Finally, the function returns this array.

To print the array, we call the `getEvenNumbers()` function and assign its return value to a variable `$numbers`. We then use the `print_r()` function to display the array.