In PHP, the `not` operator is represented by an exclamation point (`!`). It is used to reverse the truth value of a given expression.

Here are some examples:

1. Checking if a variable is not equal to a specific value:
```
$num = 10;
if ($num != 5) {
   echo "The value of num is not 5.";
}
```

2. Using not with logical operators:
```
$x = 5;
$y = 10;

if (!($x == 5 && $y == 5)) {
   echo "Either x is not equal to 5 or y is not equal to 5.";
}
```

3. Checking if a string does not contain a specific substring:
```
$str = "Hello, world!";
if (!strpos($str, "cat")) {
    echo "The string does not contain the word 'cat'";
}
```

In each of these examples, the `not` operator is used to reverse the logical result of the expression that follows it.