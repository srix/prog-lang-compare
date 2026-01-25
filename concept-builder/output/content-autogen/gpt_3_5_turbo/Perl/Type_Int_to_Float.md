In Perl, you can convert an integer to a floating-point number (float) simply by dividing it by a float number or adding a float number to it.

Here's an example:

```perl
my $integer = 5;
my $float = $integer / 2.0;
print "Float: $float";
```

In this example, we divide the integer `5` by the float `2.0` using the `/` operator and assign the resulting float value `2.5` to a variable named `$float`. We then print the `$float` variable to confirm that it is indeed a float.

Another way to convert an integer to a float is to use decimal notation in the integer. For example:

```perl
my $integer = 5;
my $float = $integer + 0.0;
print "Float: $float";
```

Here, we add `0.0` to the integer `5` using the `+` operator, which causes Perl to interpret `5` as a float value and assign the resulting float value `5.0` to a variable named `$float`. We then print the `$float` variable to confirm that it is indeed a float.

Both of these methods are simple ways of converting an integer to a floating-point number in Perl.