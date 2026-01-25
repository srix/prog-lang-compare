Sure! In Perl, you can convert an integer to a string using the `sprintf` function or by concatenating an empty string to the integer value.

Here is an example using `sprintf`:

```
my $num = 123;
my $string = sprintf("%d", $num);
print "The number $num is now the string $string\n";
```

This will output: `The number 123 is now the string 123`

And here is an example using string concatenation:

```
my $num = 456;
my $string = $num . "";
print "The number $num is now the string $string\n";
```

This will also output: `The number 456 is now the string 456`

Both methods will convert the integer to a string, but `sprintf` allows you to format your string in different ways. For example, `%d` represents a decimal integer and `%f` represents a floating-point number. You can read more about the `sprintf` function in Perl documentation.