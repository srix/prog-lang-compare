In Perl, `not` is a unary operator that negates its argument. It returns true if the argument is false, and false if the argument is true.

Here are some examples of using the `not` operator in Perl:

```perl
# Using not to negate a boolean value
my $is_weekend = 0;
if (not $is_weekend) {
    print "It's a weekday.\n";
}

# Using not to negate a numerical comparison
my $x = 10;
if (not $x > 20) {
    print "The value of x is less than or equal to 20.\n";
}

# Using not with a regular expression match
my $str = "hello world";
if (not $str =~ /goodbye/) {
    print "The string does not contain the word 'goodbye'.\n";
}
```

In each of these examples, the `not` operator is used to negate a condition, either a boolean value, a numerical comparison, or a regular expression match. The `if` statement evaluates the negation and executes the block of code if the condition is true (i.e., the original condition is false).