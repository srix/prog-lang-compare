In Perl, the `and` and `or` operators are logical operators used to combine two or more conditions to form a more complex condition.

The main difference between `and` and `or` is in their precedence. The `or` operator has a lower precedence than the `and` operator. This means that if both `and` and `or` are used in the same condition, the `and` operator is evaluated first.

The logical `and` operator, denoted by `&&` or `and`, returns true if both operands are true. Otherwise, it returns false. Here's an example:

```
my $x = 2;
my $y = 3;
if ($x == 2 and $y == 3) {
    print "Both conditions are true.\n";
}
``` 

In this example, the `and` operator is used to combine two conditions `$x == 2` and `$y == 3`. Both conditions must be true for the program to execute the code inside the if statement.

The logical `or` operator, denoted by `||` or `or`, returns true if at least one of the operands is true. Otherwise, it returns false. Here's an example:

```
my $x = 2;
my $y = 3;
if ($x == 2 or $y == 4) {
    print "At least one condition is true.\n";
}
``` 

In this example, the `or` operator is used to combine two conditions `$x == 2` and `$y == 4`. The program will execute the code inside the if statement as long as at least one of the conditions is true.

You can also use parentheses to group conditions and change the order of evaluation. Here's an example:

```
my $x = 2;
my $y = 3;
if (($x == 2 and $y == 3) or $y == 4 ) {
    print "The first condition is true or the second condition is true.\n";
}
```

In this example, the parentheses are used to group the `and` condition first, followed by the `or` condition. The program will execute the code inside the if statement as long as the first condition is true or the second condition is true.