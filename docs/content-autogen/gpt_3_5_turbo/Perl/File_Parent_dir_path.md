In Perl, you can get the parent directory path using the File::Basename module. The parent directory path can be obtained using the `dirname` function of this module. Here is some example code:

```
use File::Basename;

my $file = "/path/to/parent_dir/filename.txt";
my $parent_dir = dirname($file);

print "Parent Directory: $parent_dir\n"; # Output: Parent Directory: /path/to/parent_dir
```

In this example, the `dirname` function takes the file path as an argument and returns the parent directory path. We then print the parent directory path using the `print` statement.

You can also use this approach to get the parent directory path of the current working directory. Here is another example:

```
use File::Basename;

my $cwd = dirname(__FILE__);
my $parent_dir = dirname($cwd);

print "Parent Directory: $parent_dir\n"; # Output: Parent Directory: /path/to/parent_dir
```

In this example, we first get the current working directory using the `__FILE__` variable and pass it to the `dirname` function to get its parent directory path. We then print the parent directory path using the `print` statement.