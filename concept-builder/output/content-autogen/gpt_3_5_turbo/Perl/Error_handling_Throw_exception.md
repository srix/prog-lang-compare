In Perl, you can throw an exception by using the `die` function. This function prints the specified message to STDERR and terminates the program. 

Here is an example of how to throw an exception in Perl:

```
my $num = 10;
if ($num > 5) {
   die "Error: The number is too large";
}
```

In this example, the `die` function is used to throw an exception when the value of `$num` is greater than 5. The message "Error: The number is too large" will be printed to STDERR and the program will terminate.

You can also catch exceptions using the `eval` function. Here is an example:

```
eval {
   my $num = 10;
   if ($num > 5) {
      die "Error: The number is too large";
   }
};
if ($@) {
   print "Caught exception: $@\n";
}
```

In this example, the `eval` function is used to catch the exception that is thrown by the `die` function. If an exception is thrown, the `$@` variable will contain the error message and can be printed using the `print` function.