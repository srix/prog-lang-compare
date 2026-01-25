In Perl, the current working directory (cwd) can be retrieved using the `Cwd` module. The `getcwd()` function from this module returns the absolute path of the current working directory. Here's an example:

```
use Cwd;
my $cwd = getcwd();
print "Current working directory: $cwd\n";
```

This will output something like:

```
Current working directory: /home/user/Documents
```

Another way to get the current working directory is to use the special variable `$ENV{PWD}`. This variable contains the absolute path of the current working directory, but it may not be reliable on all systems. Here's an example:

```
my $cwd = $ENV{PWD};
print "Current working directory: $cwd\n";
```

This will output something like:

```
Current working directory: /home/user/Documents
```

Note that it's always a good practice to use the `Cwd` module to get the current working directory in Perl.