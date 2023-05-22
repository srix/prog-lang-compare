In PHP, the if statement is used to perform different actions based on different conditions. The if assignment is a shorthand method of assigning a value to a variable based on a condition. 

Here is an example of the if assign statement:

```
$x = 10;

$y = ($x > 5) ? "true" : "false"; 

echo $y; // Output: true
```

In this example, the variable `$x` is assigned a value of `10`. The variable `$y` is assigned the string value `"true"` if the condition `$x > 5` is true, otherwise it is assigned the string value `"false"`. This is achieved by using the ternary operator `?` (called a ternary operator because it has three operands) which is shorthand for an if statement.

Another example:

```
$age = 25;

$message = ($age < 18) ? "You Cannot Vote" : "You Can Vote";

echo $message; // Output: You Can Vote
```

In this example, the variable `$age` is assigned a value of `25`. The variable `$message` is assigned `"You Cannot Vote"` if the condition `$age < 18` is true, otherwise it is assigned `"You Can Vote"`. In this case, the condition is false and `$message` is assigned `"You Can Vote"`.

The if assign statement is useful as it allows us to write code more concisely and can make it easier to read in some cases.