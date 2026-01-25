Ternary operator in PHP is a shorthand method for writing conditional statements.

The syntax for the ternary operator is:

```
(expression) ? (if true) : (if false)
```

Here is an example: 

```
$x = 10;
$y = ($x < 20) ? "Less than 20" : "Greater than or equal to 20";
echo $y;
```

In this example, the variable `$x` is less than 20, so the value of `$y` will be "Less than 20".

Here's another example: 

```
$num = 5;
echo ($num % 2 == 0) ? "Even number" : "Odd number";
```

In this example, the value of `$num` is odd, so "Odd number" will be printed.

You can also nest ternary operators:

```
$num = 10;
echo ($num > 0) ? (($num % 2 == 0) ? "Positive even number" : "Positive odd number") : "Negative number";
```

In this example, the value of `$num` is positive and even, so "Positive even number" will be printed.

Ternary operators are useful for writing compact conditional statements when you only have two possible outcomes.