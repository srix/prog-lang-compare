In Perl, the if statement is used to execute a block of code if a certain condition is true. Here's an example:

```perl
my $num = 10;
if ($num > 5) {
    print "The number is greater than 5.\n";
}
```

In this example, the variable `$num` is checked to see if it is greater than 5. If it is, the message "The number is greater than 5." is printed.

Here's another example:

```perl
my $age = 30;
if ($age < 18) {
    print "You are not old enough to vote.\n";
} else {
    print "You can vote.\n";
}
```

In this example, the variable `$age` is checked to see if it is less than 18. If it is, the message "You are not old enough to vote." is printed. If it is not less than 18, the message "You can vote." is printed.

The `if` statement can also be used in conjunction with `elsif` and `else` clauses:

```perl
my $num = 5;
if ($num > 10) {
    print "The number is greater than 10.\n";
} elsif ($num > 5) {
    print "The number is greater than 5 but less than or equal to 10.\n";
} else {
    print "The number is less than or equal to 5.\n";
}
```

In this example, the variable `$num` is checked against multiple conditions. If it is greater than 10, the message "The number is greater than 10." is printed. If it is not greater than 10 but is greater than 5, the message "The number is greater than 5 but less than or equal to 10." is printed. If it is neither greater than 10 nor greater than 5, the message "The number is less than or equal to 5." is printed.