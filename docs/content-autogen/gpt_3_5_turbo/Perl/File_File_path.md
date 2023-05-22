In Perl, you can get the file path through the built-in `__FILE__` literal, which returns the full path and filename of the current script. Here is an example:

```
#!/usr/bin/perl
use strict;
use warnings;

my $file_path = __FILE__;
print "The file path is: $file_path\n";
```

This code will output:

```
The file path is: /path/to/my/script.pl
```

Alternatively, Perl also provides the `Cwd` module which enables you to get the full path of a file using its relative path. Here is an example:

```
#!/usr/bin/perl
use strict;
use warnings;
use Cwd;

my $relative_path = "my_folder/my_file.txt";
my $file_path = Cwd::abs_path($relative_path);
print "The file path is: $file_path\n";
```

This code will output something like:

```
The file path is: /path/to/my_folder/my_file.txt
```

Both methods will return the full path to the script or file.