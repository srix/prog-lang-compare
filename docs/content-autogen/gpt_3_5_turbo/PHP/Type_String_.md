One way to check if a string is a number in PHP is to use the `is_numeric()` function. This function returns `true` if the given string is a number or a numeric string, otherwise it returns `false`. Here is an example:

```php
// Check if a string is a number
$myString = '123';
if (is_numeric($myString)) {
  echo "The string is a number.";
} else {
  echo "The string is NOT a number.";
}
```

In this example, the `is_numeric()` function is used to check if the string `$myString` is a number. Since `$myString` is a numeric string, the output will be "The string is a number."

However, if we use a non-numeric string like "hello" as the input for the `is_numeric()` function, the output would be "The string is NOT a number." Here is an example:

```php
// Check if a string is a number
$myString = 'hello';
if (is_numeric($myString)) {
  echo "The string is a number.";
} else {
  echo "The string is NOT a number.";
}
```

In this example, the `is_numeric()` function is used to check if the string `$myString` is a number. Since `$myString` is not a numeric string, the output will be "The string is NOT a number."