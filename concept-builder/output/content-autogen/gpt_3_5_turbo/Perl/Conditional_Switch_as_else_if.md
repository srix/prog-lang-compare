In Perl, the `switch` statement can be used instead of multiple `if/else` statements. Starting from Perl 5.10, the `switch` statement is included in the core language as `given/when`.

Here's an example of using `given/when` statement:

```
use feature qw(switch);

my $num = 5;

given ($num) {
    when (1) { print "One\n"; }
    when (2) { print "Two\n"; }
    when (3) { print "Three\n"; }
    default { print "The number is not 1, 2 or 3\n"; }
}
```

The above example checks the value of the `$num` variable and executes the corresponding block of code. If none of the `when` conditions is true, it will execute the code in the `default` block.

Alternatively, you can use the `Switch` module to enable the use of `switch` statement. Here's an example:

```
use Switch;

my $num = 5;

switch($num) {
    case 1 { print "One\n"; }
    case 2 { print "Two\n"; }
    case 3 { print "Three\n"; }
    else { print "The number is not 1, 2 or 3\n"; }
}
```

This code is equivalent to the previous example using `given/when`. If none of the `case` conditions is true, it will execute the code in the `else` block.