In PHP, to import another file, we use the include or require statement. Both of these statements work in the same way, the only difference between them is that if the included file is not found, then the require statement will stop the script execution while include statement will just throw a warning message and continue with the script execution.

Here are some examples:

### 1. Include statement

```php
<?php
include 'sample_file.php';
?>
```

In this example, we are including the `sample_file.php` file in our current PHP script using the `include` statement.

### 2. Require statement

```php
<?php
require 'sample_file.php';
?>
```

In this example, we are including the `sample_file.php` file in our current PHP script using the `require` statement.

### 3. Including a file from a different directory

```php
<?php
include 'dir/sample_file.php';
?>
```

In this example, we are including the `sample_file.php` file from a directory called `dir` which is located in the same directory as the current PHP script.

### 4. Including a file with a different extension

```php
<?php
include 'sample_file.html';
?>
```

In this example, we are including the `sample_file.html` file in our current PHP script using the `include` statement even though HTML is not a typical PHP file extension. 

These are some basic examples of how to import another file in PHP.