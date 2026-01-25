In Perl, you can use the `Scalar::Util` module to check if a string is a number.

Here's an example code:

```
use Scalar::Util qw(looks_like_number);

my $str1 = "1234";
my $str2 = "12A4";

if (looks_like_number($str1)) {
    print "$str1 is a number\n";
}
else {
    print "$str1 is not a number\n";
}

if (looks_like_number($str2)) {
    print "$str2 is a number\n";
}
else {
    print "$str2 is not a number\n";
}
```

Output:
```
1234 is a number
12A4 is not a number
```

In this example, the `looks_like_number` function checks if `$str1` and `$str2` are numbers. It returns true if the string looks like a number, and false otherwise.