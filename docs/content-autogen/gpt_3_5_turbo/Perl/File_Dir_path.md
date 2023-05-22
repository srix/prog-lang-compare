In Perl, you can use the `dirname` function from the built-in `File::Basename` core module to get the directory path of a specified file. Here's an example:

```perl
use File::Basename;

my $file_path = "/path/to/file.txt";
my $dir_path = dirname($file_path);
print "Directory path: $dir_path\n";
```

Output:
```
Directory path: /path/to
```

In the above example, we first import the `File::Basename` module. Then, we define the `$file_path` variable with the path to our file. We then use the `dirname` function to extract the directory path from the file path, and assign the result to the `$dir_path` variable. Finally, we print the directory path to the console using the `print` function.

You can also use the `Cwd` (Current Working Directory) module to get the current working directory. Here's an example:

```perl
use Cwd;

my $dir_path = getcwd();
print "Current working directory: $dir_path\n";
```

Output:
```
Current working directory: /path/to/current/dir
```

In the above example, we first import the `Cwd` module. We then use the `getcwd` function to get the current working directory, and assign the result to the `$dir_path` variable. Finally, we print the current working directory path to the console using the `print` function.