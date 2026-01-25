In order to get the path of the sister directory in Perl, you can make use of the `File::Basename` module. Here is an example:

```
use File::Basename;

my $current_dir = '/dir1/dir2/dir3';
my $sister_dir = dirname(dirname($current_dir));

print "Sister dir path: $sister_dir\n";
```

The `dirname` function is used to get the parent directory path of the current directory. By calling it twice, we can get the path of the sister directory. In this example, the output will be:

```
Sister dir path: /dir1
```

You can modify `$current_dir` to any directory path and the script will automatically output the path of its sister directory.