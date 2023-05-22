In PHP, you can use the `count()` function to get the size of a hash (or an associative array). Here is an example:

```php
$hash = array(
    "apple" => 3,
    "banana" => 5,
    "orange" => 2
);

$size = count($hash);
echo "The size of the hash is: " . $size;
```

Output:
```
The size of the hash is: 3
```

In the above example, we first defined a hash with three key-value pairs (or elements). We then used the `count()` function to get the size of the hash, which is 3 in this case. Finally, we printed the size using the `echo` statement.