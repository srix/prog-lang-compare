In Perl, string interpolation refers to the process of inserting the values of variables into a string. Interpolation is done by enclosing the string in double quotes instead of single quotes. Here are some examples:

```
my $name = "John";
print "Hello, $name!"; # Output: Hello, John!

my $age = 30;
print "You are $age years old."; # Output: You are 30 years old.

my $product = "book";
my $quantity = 2;
my $price = 9.99;
my $total = $quantity * $price;
print "You ordered $quantity $product(s) for a total of \$$total."; # Output: You ordered 2 books for a total of $19.98.
```

In the examples above, variables are enclosed in curly braces if they are part of a larger string:

```
my $name = "John";
print "Hello, ${name}!"; # Output: Hello, John!

my $quantity = 2;
print "You ordered ${quantity} book(s)."; # Output: You ordered 2 book(s).
```

If you want to use a variable's value inside a regular expression, you can also interpolate it:

```
my $text = "Hello, world!";
my $pattern = "world";
if ($text =~ /$pattern/) {
    print "Match found!";
} else {
    print "Match not found.";
} # Output: Match found!
```

Note that interpolation doesn't happen inside single quotes:

```
my $name = "John";
print 'Hello, $name!'; # Output: Hello, $name!
```