To get the parent directory path in PHP, you can use the `dirname()` function. This function returns the parent directory path of a given directory path.

Here's an example code snippet:

```
$current_dir = '/path/to/current/directory';

$parent_dir = dirname($current_dir);

echo $parent_dir; // Output: /path/to/current
```

In this example, the `$current_dir` variable contains the path of the current directory. The `dirname()` function is then used to get the parent directory path, which is stored in the `$parent_dir` variable. Finally, the `$parent_dir` variable is echoed to display the parent directory path.

It's important to note that `dirname()` function only works with paths, not URLs. So if you want to use it with a URL, you need to use `parse_url()` to extract the path first, like this:

```
$current_url = 'http://example.com/path/to/current/directory';

$path = parse_url($current_url, PHP_URL_PATH);

$parent_dir = dirname($path);

echo $parent_dir; // Output: /path/to/current
```

In this example, we use `parse_url()` to extract the path from the URL. Then we use the `dirname()` function to get the parent directory path, which is stored in the `$parent_dir` variable. Finally, the `$parent_dir` variable is echoed to display the parent directory path.

I hope that helps!