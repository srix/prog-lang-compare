Floating-point numbers are also known as "floats" or "double-precision numbers" in PHP. Floats are used for representing decimal or fractional numbers with a high degree of precision. 

To declare a float variable in PHP, you simply assign a decimal number to a variable:

```
$num = 3.14;
```

Here, `$num` is a float variable with a value of 3.14.

You can perform various arithmetic operations on float variables:

```
$num1 = 1.5;
$num2 = 2.5;
$sum = $num1 + $num2; // Adds two floats
$difference = $num2 - $num1; // Subtracts two floats
$product = $num1 * $num2; // Multiplies two floats
$quotient = $num2 / $num1; // Divides two floats
```

You can also use various functions to work with floats like `round()`, `ceil()`, `floor()`, and `abs()`:

```
$num = 3.14;
$rounded = round($num); // Rounds float to nearest integer
$ceiling = ceil($num); // Rounds float up to nearest integer
$floor = floor($num); // Rounds float down to nearest integer
$absolute = abs(-$num); // returns the absolute value of the float
```

Note that due to the nature of the way computers handle floating-point numbers, some operations may result in unexpected or inaccurate results. It is always important to test and verify results when working with floats in PHP.