In PHP, we use the `getcwd()` function to get the current working directory path.

Here's an example of using `getcwd()` function:

```
$currentDir = getcwd();
echo "Current directory is: " . $currentDir;
```

Output:
```
Current directory is: /Users/username/Documents/www
```

Another way to get the current directory's path is to use the `__DIR__` magic constant. This constant returns the directory of the current file.

For example:
```
$currentDir = __DIR__;
echo "Current directory is: " . $currentDir;
```

Output:
```
Current directory is: /Users/username/Documents/www/dirname
```

Note that both methods return the path as a string. You can then use this information in your PHP code to work with files and directories located within the current working directory.