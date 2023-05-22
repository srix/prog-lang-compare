In PHP, exceptions can be used to handle errors and abnormal conditions in an application. To throw an exception in PHP, the `throw` keyword is used. Here's an example:

```php
function checkAge($age) {
  if ($age < 18) {
    throw new Exception("You must be at least 18 years old");
  } else {
    echo "Welcome!";
  }
}

try {
  checkAge(15);
} catch (Exception $e) {
  echo "Error: " . $e->getMessage();
}
```

In the example above, the `checkAge()` function checks whether the provided age is less than 18, and if so, throws an exception with the message "You must be at least 18 years old". 

The `try` block is used to enclose the `checkAge()` function call, and the `catch` block is used to handle the exception thrown by the function. In this case, the message "Error: You must be at least 18 years old" will be displayed to the user.

Another example is:

```php
$file = 'example.txt';

try {
    if (!file_exists($file)) {
        throw new Exception('File not found');
    }

    $handle = fopen($file, 'r');

    if (!$handle) {
        throw new Exception('Could not open file');
    }

    // Do something with the file

    fclose($handle);
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}
```

In this example, the `try` block attempts to open a file with the name "example.txt". If the file does not exist or cannot be opened, an exception is thrown with the appropriate error message. The `catch` block handles the exception and displays the error to the user.