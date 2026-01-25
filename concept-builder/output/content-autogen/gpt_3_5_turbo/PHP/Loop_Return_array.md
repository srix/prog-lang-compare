To return an array in PHP, you can use the "return" keyword followed by an array variable with its elements. 

Here's an example:

```
<?php

function getColors() {
  $colors = array("Red", "Green", "Blue", "Yellow");
  return $colors;
}

print_r(getColors());

?>
```

In this example, the "getColors" function returns an array of colors. When the "print_r" function is called on the returned value, it displays the following output:

```
Array
(
    [0] => Red
    [1] => Green
    [2] => Blue
    [3] => Yellow
)
```

Alternatively, you can also create an array outside of a function and return that array as shown below:

```
<?php

$fruits = array("Apple", "Banana", "Orange");

function getFruits() {
  global $fruits;
  return $fruits;
}

print_r(getFruits());

?>
```

In this example, the "getFruits" function returns the global array "$fruits". The "global" keyword is used to bring the global variable "fruits" inside the function. When the "print_r" function is called on the returned value from "getFruits", it displays the following output:

```
Array
(
    [0] => Apple
    [1] => Banana
    [2] => Orange
)
```