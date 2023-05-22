In PHP, you can get the file path using the magical constant `__FILE__`. This constant holds the full path and filename of the current script.

Here's an example:

```
<?php
// Get file path
$file_path = __FILE__;

// Output file path
echo "The file path is: " . $file_path;
?>
```

This will output something like:

```
The file path is: /var/www/html/myscript.php
```

You can also use `realpath()` function to get the canonicalized absolute pathname:

```
<?php
// Get real file path
$file_path = realpath(__FILE__);

// Output real file path
echo "The real file path is: " . $file_path;
?>
```

This will output something like:

```
The real file path is: /var/www/html/myscript.php
```

Note: `__FILE__` returns the filename of the script relative to the current working directory, so be careful when using it in include or require statements.