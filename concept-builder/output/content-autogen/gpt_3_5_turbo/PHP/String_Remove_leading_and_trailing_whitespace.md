Certainly!
 
In PHP, you can use the built-in function `trim()` to remove leading and trailing whitespaces from a string. This can be useful in situations where user input may include extra spaces that need to be cleaned up before being processed.

Here's an example of how to use `trim()`:

```php
$string = "   Hello, World!    ";
$trimmed_string = trim($string);
echo $trimmed_string;
```

In this example, we first define a variable `$string` that contains a string with leading and trailing whitespaces. We then pass this string to the `trim()` function and assign the result to a new variable `$trimmed_string`. Finally, we use `echo` to output the trimmed string to the screen.

The output of this code would be:

```
Hello, World!
```

As you can see, the leading and trailing whitespaces have been removed from the original string.

Note that `trim()` can also be used with a second parameter to specify which characters should be removed from the string. For example, if you want to remove both leading and trailing commas from a string, you can use:

```php
$string = ",,Hello, World!,,";
$trimmed_string = trim($string, ',');
echo $trimmed_string;
```

This would output:

```
Hello, World!
```

I hope this helps!