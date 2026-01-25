In Perl, `if/else` statements are used to make decisions based on specified conditions. The syntax of `if/else` statements in Perl is:

```
if (condition) {
  # Code to be executed if the condition is true
}
else {
  # Code to be executed if the condition is false
}
```

Here's an example that demonstrates the use of `if/else` in Perl:

```perl
# Example 1: Check if a number is positive or negative
my $num = -10;

if ($num >= 0) {
  print "The number is positive\n";
}
else {
  print "The number is negative\n";
}
```

Output:
```
The number is negative
```

In the above example, the condition `$num >= 0` is evaluated. If the condition is true, i.e., if `$num` is greater than or equal to zero, the message "The number is positive" is printed. If the condition is false, i.e., if `$num` is negative, the message "The number is negative" is printed.

You can also write `if/else` statements in a single line, using the ternary operator `?:`. Here's an example:

```perl
# Example 2: Check if a person is an adult or a minor
my $age = 18;

my $status = ($age >= 18) ? "adult" : "minor";
print "The person is a $status\n";
```

Output:
```
The person is a adult
```

In the above example, the condition `$age >= 18` is evaluated. If the condition is true, i.e., if the person is 18 years or older, the variable `$status` is assigned the value "adult". If the condition is false, i.e., if the person is younger than 18 years, the variable `$status` is assigned the value "minor". Finally, the value of `$status` is printed using `print` statement.