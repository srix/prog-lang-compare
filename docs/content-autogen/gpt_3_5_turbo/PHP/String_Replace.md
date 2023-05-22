To replace a substring within a string in PHP, you can use the `str_replace` function. The `str_replace` function takes three arguments: the substring to replace, the replacement string, and the original string. Here's an example:

```php
$string = "The quick brown fox jumps over the lazy dog";
$new_string = str_replace("fox", "cat", $string);
echo $new_string;
```

The output of this code will be:

```
The quick brown cat jumps over the lazy dog
```

In this example, the `str_replace` function replaces the substring "fox" with the replacement string "cat" in the original string.

You can also replace multiple substrings at once by passing arrays as the first and second arguments of the `str_replace` function. For example:

```php
$string = "The quick brown fox jumps over the lazy dog";
$old_substrings = array("fox", "dog");
$new_substrings = array("cat", "cat");
$new_string = str_replace($old_substrings, $new_substrings, $string);
echo $new_string;
```

The output of this code will be:

```
The quick brown cat jumps over the lazy cat
```

In this example, the `str_replace` function replaces the substrings "fox" and "dog" with the replacement strings "cat" and "cat", respectively.