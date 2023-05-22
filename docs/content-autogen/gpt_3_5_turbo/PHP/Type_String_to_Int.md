In PHP, you can convert a string to an integer manually using the `intval` function or use the automatic casting that occurs when you perform a mathematical operation with a string.

Here are examples for both methods:

Using intval:

```
$string_num = "42";
$int_num = intval($string_num);
echo $int_num; // Outputs 42
```

In this example, we first define a string variable `$string_num` with the value `'42'`. We then use the `intval` function to convert the string to an integer and store it in the variable `$int_num`. Finally, we use `echo` to display the converted integer, which outputs `42`.

Using mathematical operation:

```
$string_num = "42";
$int_num = $string_num + 0;
echo $int_num; // Outputs 42
```

In this example, we use the arithmetic addition operator `+` to add the string `$string_num` to the integer 0. PHP automatically converts the string to an integer before doing the addition and stores the result in the variable `$int_num`. Finally, we use `echo` to display the converted integer, which outputs `42`.