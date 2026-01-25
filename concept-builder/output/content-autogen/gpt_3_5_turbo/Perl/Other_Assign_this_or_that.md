In Perl, you can use the conditional operator `? :` to assign `this` or `that` based on a condition. The basic syntax for this type of assignment in Perl is:

`$var = (condition) ? this : that;`

Here's an example where we will assign a value to a variable based on a condition:

```perl
my $age = 25;
my $message = ($age < 18) ? "You are under 18 years old" : "You are 18 years or older";
print $message;
```

In this example, we check whether the variable `$age` is less than 18. If it is, we assign the string `"You are under 18 years old"` to the variable `$message`. If it's not, we assign the string `"You are 18 years or older"`.

You can also use this type of assignment for more complex conditions, for example:

```perl
my $x = 10;
my $y = 20;
my $z = ($x > $y) ? ($x - $y) : ($y - $x);
print $z;
```

In this example, we assign the value of `$x - $y` to the `$z` variable if `$x` is greater than `$y`, otherwise we assign the value of `$y - $x`. Here, the value of `$z` becomes `10 - 20 = -10`, since `$x` is less than `$y`.