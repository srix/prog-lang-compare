In PHP, we can get the path of the directory which is one level up in the hierarchy using the `dirname()` function. 

Here is an example:

Suppose we have the following directory structure:

```
- project
  - app
    - index.php
  - config
  - public
```

If we are working in `index.php` file which is located in the `app` directory and we want to get the path of the `config` directory which is located in the parent directory of `app`, we can use the `dirname()` function as follows:

```php
$config_dir = dirname(__DIR__) . '/config';
echo $config_dir; // output: /path/to/project/config
```

The `__DIR__` magic constant returns the absolute path of the current directory (`app`). We then use the `dirname()` function to get the path of the parent directory (`project`). Finally, we concatenate the path of the `config` directory to the parent directory path to get the complete path of the directory.

Note that we use forward slash (`/`) as directory separator instead of backslash (`\`) because PHP works with forward slash as the directory separator regardless of the operating system used.