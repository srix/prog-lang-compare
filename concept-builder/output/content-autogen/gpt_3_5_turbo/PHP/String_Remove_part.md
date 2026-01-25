In PHP, you can remove part of a string using the `substr_replace()` or `str_replace()` functions.

`substr_replace()` function:
The `substr_replace()` function replaces a part of a string with another string. The syntax is as follows:

```
substr_replace($original_string, $replacement_string, $start, $length)
```

Here is an example:

```
$original_string = "Hello World";
$replacement_string = "Friend";
$start = 6;
$length = 5;

$new_string = substr_replace($original_string, $replacement_string, $start, $length);

echo $new_string; // Outputs: Hello Friend
```

In this example, we are replacing the substring "World" with "Friend" starting from the 6th character of the original string. The output is "Hello Friend".

`str_replace()` function:
The `str_replace()` function replaces all occurrences of a string with another string. The syntax is as follows:

```
str_replace($search, $replace, $original_string)
```

Here is an example:

```
$original_string = "Hello World";
$search = "World";
$replace = "";

$new_string = str_replace($search, $replace, $original_string);

echo $new_string; //Outputs: Hello
```

In this example, we are removing the substring "World" from the original string using the `str_replace()` function. The output is "Hello".