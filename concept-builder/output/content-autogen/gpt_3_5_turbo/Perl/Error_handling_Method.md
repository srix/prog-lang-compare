In Perl, try-catch-finally blocks can be implemented using the "Try::Tiny" module, which provides a simple syntax for error handling. Here's an example:

```perl
use Try::Tiny;

sub divide {
  my ($numerator, $denominator) = @_;
  try {
    my $result = $numerator / $denominator;
    return $result;
  } catch {
    warn "Caught exception: $_";
    return 0;
  } finally {
    print "Done with operation.\n";
  }
}

print divide(10, 2) . "\n";
print divide(10, 0) . "\n";
```

In this example, the "divide" function attempts to divide the first argument by the second argument. If the division does not throw an exception, the result is returned. If an exception is caught, a warning message is printed and the function returns 0. Finally, regardless of whether an exception was thrown, a message is printed to indicate that the operation is done.

When the above code is executed, the output will be:

```
5
Caught exception: Illegal division by zero at example.pl line 7.
0
Done with operation.
Done with operation.
```

As you can see, the "try" block attempts to divide 10 by 2, returning a result of 5. The "finally" block is executed, printing the "Done with operation." message. Then, the "try" block attempts to divide 10 by 0, which throws an exception. The "catch" block catches the exception and prints a warning message, and the function returns 0. The "finally" block is executed again, printing the "Done with operation." message.