In PHP, a switch statement is used to perform different actions based on different conditions. The syntax for a switch statement in PHP is as follows:

```
switch (expression) {
  case value1:
    // statements to be executed if the expression matches value1
    break;
  case value2:
    // statements to be executed if the expression matches value2
    break;
  default:
    // statements to be executed if the expression doesn't match any of the cases
}
```

Here is an example of using a switch statement in PHP:

```
$color = "blue";

switch ($color) {
  case "red":
    echo "The color is red";
    break;
  case "green":
    echo "The color is green";
    break;
  case "blue":
    echo "The color is blue";
    break;
  default:
    echo "The color is not red, green or blue";
}
```

In this example, the switch statement checks the value of `$color` and executes the appropriate code block depending on its value. Since `$color` is set to "blue", the third case is matched and "The color is blue" is printed to the screen.

You can also use multiple values for a case by separating them with commas, like this:

```
$num = 2;

switch ($num) {
  case 1, 3, 5:
    echo "The number is odd";
    break;
  case 2, 4, 6:
    echo "The number is even";
    break;
  default:
    echo "The number is not between 1 and 6";
}
```

In this example, the switch statement checks the value of `$num` and prints whether it is odd or even based on the case that matches. Since `$num` is set to 2, the second case is matched and "The number is even" is printed to the screen.