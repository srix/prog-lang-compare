Sure, to convert a string to an integer in Perl, you can use the built-in `int()` function. 

Here are some examples:

```perl
my $string_num = "10";

# convert string to integer
my $int_num = int($string_num);

print "The string $string_num is converted to the integer $int_num\n";
```

Output: `The string 10 is converted to the integer 10`

```perl
my $string_num = "10.7";

# convert string to integer
my $int_num = int($string_num);

print "The string $string_num is converted to the integer $int_num\n";
```

Output: `The string 10.7 is converted to the integer 10`

Note that when the input string contains a decimal, the `int()` function will round down to the nearest integer.

```perl
my $string_num = "abc123";

# convert string to integer
my $int_num = int($string_num);

print "The string $string_num is converted to the integer $int_num\n";
```

Output: `The string abc123 is converted to the integer 0`

If the input string cannot be converted to an integer, the `int()` function returns `0`.