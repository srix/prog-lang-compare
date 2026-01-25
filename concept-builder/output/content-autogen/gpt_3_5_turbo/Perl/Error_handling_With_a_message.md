In Perl, the `try/catch/finally` block is used to handle exceptions that may occur within your program's execution. The `try` block is used to enclose the code that may result in an exception, while `catch` block is used to catch the exception, and `finally` block is used to specify any final actions that need to be taken, regardless of whether or not an exception was thrown.

Here is an example of how to use `try/catch/finally` in Perl with a custom error message:

```
use try::tiny;

try {
  # Some code that may result in an exception
  open (FILE, '<', 'missing_file.txt') || die "Cannot open file! $!\n";
}
catch {
  # Catch the error and print a message
  die "Error: $_\n";
}
finally {
  # Any final actions that need to be taken
  close FILE;
};

# The code will continue execution from here if no exception was thrown
```

In the above example, if the file `missing_file.txt` cannot be opened, it will result in an exception, which will cause the code to jump to the `catch` block where the custom error message will be printed. The `finally` block will then be executed, which will close any opened files. If there was no exception, the code will bypass the `catch` block and simply continue execution from where the `finally` block ends.

In summary, `try/catch/finally` in Perl with a custom error message allows you to handle exceptions gracefully and provide your own error messages to help the user understand what went wrong in your program.