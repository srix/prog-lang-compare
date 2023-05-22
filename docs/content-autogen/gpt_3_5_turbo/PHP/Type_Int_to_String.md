To convert an integer to a string in PHP, you can use the `strval()` or the `(string)` function. Here are some examples of how to use each method:

Using `strval()` function:

```php
$int = 42;
$str = strval($int);
echo $str; // Output: "42"
```

Using `(string)` type casting:

```php
$int = 42;
$str = (string) $int;
echo $str; // Output: "42"
```

Both methods will convert the integer `42` into a string `"42"`. It's important to note that PHP is a dynamically typed language, meaning that variable types are determined at runtime. Therefore, you can use these methods to convert any integer to a string in PHP.