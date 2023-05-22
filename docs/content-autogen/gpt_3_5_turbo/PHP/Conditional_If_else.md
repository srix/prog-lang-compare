In PHP, if/else is a conditional statement that allows you to execute code based on certain conditions.

The syntax for if/else in PHP is as follows:

```
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

Here's a simple example that checks if a number is greater than 10 and outputs a message depending on the result:

```php
$num = 7;

if ($num > 10) {
  echo "The number is greater than 10.";
} else {
  echo "The number is less than or equal to 10.";
}
```

In this example, $num is assigned the value of 7. The if statement checks if $num is greater than 10, which is false, so the code in the else block executes and outputs "The number is less than or equal to 10."

You can also use elseif to add more conditions to the statement:

```php
$num = 15;

if ($num > 20) {
  echo "The number is greater than 20.";
} elseif ($num > 10) {
  echo "The number is greater than 10 but less than or equal to 20.";
} else {
  echo "The number is less than or equal to 10.";
}
```

In this example, $num is assigned the value of 15. The if statement first checks if $num is greater than 20, which is false. It then checks if $num is greater than 10, which is true, so the code in the elseif block executes and outputs "The number is greater than 10 but less than or equal to 20."