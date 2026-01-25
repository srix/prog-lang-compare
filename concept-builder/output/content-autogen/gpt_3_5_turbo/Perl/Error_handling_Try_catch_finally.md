In Perl, try/catch/finally can be implemented using the `Try::Tiny` module. This module provides a simple syntax for error handling.

Here's an example of how to use `Try::Tiny` in Perl:

```
use Try::Tiny;

try {
    # code that can throw an exception
    die "Something went wrong";
} catch {
    # code to handle the exception
    print "Caught error: $_";
} finally {
    # code to execute regardless of whether an exception was thrown or caught
    print "Done";
};
```

In the above example, the `try` block contains code that could potentially throw an exception. 

The `catch` block specifies what should happen if an exception is thrown. The `$_` variable holds a reference to the exception object.

The `finally` block contains code that will be executed regardless of whether an exception was thrown or not.

Overall, `Try::Tiny` provides a convenient way to handle exceptions in Perl code.