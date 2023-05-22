In PHP, a multidimensional array is an array in which each element can also be an array, thereby creating a grid-like structure. To create and initialise a multidimensional array in PHP, you can simply specify the values within square brackets in the following format:

```
$array = array(
    array(value1, value2, value3),
    array(value4, value5, value6),
    array(value7, value8, value9)
);
```

Here's an example that illustrates how to create a 3 x 4 multidimensional array that contains random numbers:

```
// create a 3 x 4 array and initialise random numbers
$array = array(
    array(rand(1,10), rand(1,10), rand(1,10), rand(1,10)),
    array(rand(1,10), rand(1,10), rand(1,10), rand(1,10)),
    array(rand(1,10), rand(1,10), rand(1,10), rand(1,10))
);

// print the array
print_r($array);
```

This will output:

```
Array
(
    [0] => Array
        (
            [0] => 10
            [1] => 5
            [2] => 3
            [3] => 8
        )

    [1] => Array
        (
            [0] => 8
            [1] => 4
            [2] => 2
            [3] => 7
        )

    [2] => Array
        (
            [0] => 9
            [1] => 10
            [2] => 2
            [3] => 5
        )

)
```

As you can see, the multidimensional array contains three arrays, each of which have four randomly generated integer values ranging from 1 to 10.