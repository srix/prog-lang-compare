In PHP, you can get the directory path using the "dirname" function.

Here's an example:

```
<?php
$currentDirectory = dirname(__FILE__);
echo $currentDirectory;
?>
```

In the above code, the "__FILE__" constant returns the full path and filename of the current file. The "dirname" function then extracts the directory path from this full path and stores it in the "$currentDirectory" variable. Finally, the path is echoed to the screen using the "echo" statement.

Alternatively, you can use the "getcwd" function to retrieve the current working directory:

```
<?php
$currentDirectory = getcwd();
echo $currentDirectory;
?>
```

In this code, the "getcwd" function retrieves the current working directory and stores it in the "$currentDirectory" variable. The path is then echoed to the screen using the "echo" statement.