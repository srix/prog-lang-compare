Concatenation is the process of combining two or more arrays into one. In PHP, we can use the `array_merge()` function to concatenate arrays. Here are a few examples of how to use `array_merge()`:

Example 1: Concatenating two arrays with numeric keys

```
$array1 = array("apple", "banana", "orange");
$array2 = array("mango", "pear", "grape");
$result = array_merge($array1, $array2);

print_r($result);
```

Output:
```
Array
(
    [0] => apple
    [1] => banana
    [2] => orange
    [3] => mango
    [4] => pear
    [5] => grape
)
```

Example 2: Concatenating two arrays with string keys

```
$array1 = array("name" => "John", "age" => 30);
$array2 = array("city" => "New York");

$result = array_merge($array1, $array2);

print_r($result);
```

Output:
```
Array
(
    [name] => John
    [age] => 30
    [city] => New York
)
```

Example 3: Concatenating three or more arrays

```
$array1 = array("apple", "banana", "orange");
$array2 = array("mango", "pear", "grape");
$array3 = array("watermelon", "kiwi", "plum");

$result = array_merge($array1, $array2, $array3);

print_r($result);
```

Output:
```
Array
(
    [0] => apple
    [1] => banana
    [2] => orange
    [3] => mango
    [4] => pear
    [5] => grape
    [6] => watermelon
    [7] => kiwi
    [8] => plum
)
```

Note that the `array_merge()` function ignores the keys of the arrays being concatenated and re-indexes the result using numeric keys starting from 0. If you want to preserve the keys, you can use the `+` operator to concatenate the arrays:

```
$array1 = array("name" => "John", "age" => 30);
$array2 = array("city" => "New York");

$result = $array1 + $array2;

print_r($result);
```

Output:
```
Array
(
    [name] => John
    [age] => 30
    [city] => New York
)
```

In this case, if there are duplicate keys, the value from the first array will be used.