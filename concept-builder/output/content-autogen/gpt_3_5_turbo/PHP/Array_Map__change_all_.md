To change all elements of an array in PHP, you can use a loop (such as a for loop or a foreach loop) to iterate through each element of the array and modify their values as needed.

Here is an example using a foreach loop that multiplies each element of the array by 2:

```
$array = array(1, 2, 3, 4, 5);
foreach ($array as &$value) {
  $value *= 2;
}
unset($value); // unset reference to last element to avoid bugs

print_r($array);
```

This will output:

```
Array
(
    [0] => 2
    [1] => 4
    [2] => 6
    [3] => 8
    [4] => 10
)
```

Note the use of `&$value` in the foreach loop to modify the elements by reference, and the use of `unset($value)` outside of the loop to avoid any potential bugs caused by the reference.