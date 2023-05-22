To import libraries in PHP, we make use of the `include`/`require` statements. These statements allow us to include the code in the specified file into our current PHP file, effectively making all the functions and variables in that file available for use.

Here is an example of using `include` to import the contents of a file named `library.php` into our current PHP file:

```php
<?php
include 'library.php';

// Code that uses functions and variables from library.php
?>
```

In this example, all the functions and variables defined in `library.php` will now be available for use in the current PHP file.

It's also possible to use the `require` statement, which works in the same way as `include` but will cause a fatal error if the specified file is not found:

```php
<?php
require 'library.php';

// Code that uses functions and variables from library.php
?>
```

If `library.php` cannot be found, this code will result in a fatal error and the script will stop executing.

Finally, it is also possible to include remote files using the `include`/`require` statements, like so:

```php
<?php
include 'http://example.com/library.php';

// Code that uses functions and variables from remote file
?>
```

In this case, the contents of the specified remote file will be included in the same way as if it were a local file. However, it's important to note that this is not recommended as it can be a security risk and can cause performance issues.