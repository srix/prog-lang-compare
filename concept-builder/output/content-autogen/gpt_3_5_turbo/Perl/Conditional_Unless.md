In Perl, `unless` is a conditional statement that allows you to execute a piece of code if a certain condition is `false`. The syntax for using `unless` is:

```
unless (condition) {
  # Code to execute if the condition is false
}
```

Here's an example:

```
my $num = 10;

unless ($num % 2 == 0) {
  print "$num is not even";
}
```

In this example, `unless` checks if `$num` is even. If it's not, it executes the code inside the block and prints the message "10 is not even".

You can also use `else` with `unless` to execute a different block of code when the condition is true. Here's an example:

```
my $num = 10;

unless ($num % 2 == 0) {
  print "$num is not even";
} else {
  print "$num is even";
}
```

In this example, `unless` checks if `$num` is even. Since it is, it executes the code inside the `else` block and prints the message "10 is even".