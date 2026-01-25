In Perl, the times function returns the number of seconds of system time that have elapsed since the start of the program's execution. It can be used to measure the amount of CPU time used by a program.

Here's an example:

```
my $start_time = times();

# Code to be timed here

my $end_time = times();
my $elapsed_time = $end_time - $start_time;

print "Elapsed time: $elapsed_time seconds\n";
```

In this example, the times function is called twice, once at the beginning of the code to be timed and once at the end. The difference between the two values is calculated and printed out as the elapsed time.

Here's another example that demonstrates how to use times to measure the CPU time used by a specific function:

```
sub my_function {
  my $start_time = times();

  # Code for my_function here

  my $end_time = times();
  my $elapsed_time = $end_time - $start_time;

  print "my_function used $elapsed_time seconds of CPU time\n";
}

my_function();
```

In this example, the times function is called at the beginning and end of the my_function subroutine. The difference between the two values is calculated and printed out as the CPU time used by the function.