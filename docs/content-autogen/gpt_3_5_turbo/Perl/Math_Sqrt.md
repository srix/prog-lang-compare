In Perl, you can use the `sqrt()` function to get the square root of a number. Here's an example:

```perl
my $num = 16;
my $sqrt = sqrt($num);
print "Square root of $num is $sqrt\n";
```

This will output:

```
Square root of 16 is 4
```

You can also use variables in the `sqrt()` function:

```perl
my $a = 9;
my $b = 25;
my $c = 36;

my $sqrt_a = sqrt($a);
my $sqrt_b = sqrt($b);
my $sqrt_c = sqrt($c);

print "Square root of $a is $sqrt_a\n";
print "Square root of $b is $sqrt_b\n";
print "Square root of $c is $sqrt_c\n";
```

This will output:

```
Square root of 9 is 3
Square root of 25 is 5
Square root of 36 is 6
```

Note that the `sqrt()` function only works for positive numbers. If you try to take the square root of a negative number, you will get an error.