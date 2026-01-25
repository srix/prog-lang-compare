In PHP, unless is not a defined keyword. However, you can achieve a similar effect using the logical not operator `!` combined with an `if` statement.

The basic syntax for using unless in PHP is:

```
if (!condition) {
   // code block to execute if condition is false
}
```

Here, the `!` operator negates the result of the condition, making the `if` statement true if the condition is false. If the condition is true, the code block inside the `if` statement will not be executed.

Here's an example:

```
$num = 5;

// unless $num is less than 10, execute this code block
if (!($num < 10)) {
   echo "The number is greater than or equal to 10.";
}
```

In this example, the condition `!($num < 10)` is true because `$num` is not less than 10. Therefore, the code block inside the `if` statement will not be executed.

Another example:

```
$is_admin = false;

// unless $is_admin evaluates to true, execute this code block
if (!$is_admin) {
   echo "You are not authorized to access this resource.";
}
```

In this example, the condition `!$is_admin` is true because `$is_admin` is false. Therefore, the code block inside the `if` statement will be executed.