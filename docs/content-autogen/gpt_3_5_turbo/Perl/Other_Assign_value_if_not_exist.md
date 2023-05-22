In Perl, you can use the logical OR operator (`||`) to assign a value to a variable if that variable doesn't already have a value. This is called the "define or" operator. Here's an example:

```
my $name;
$name ||= "John Smith";
```

In this example, `$name` is initially undefined. The `||=` operator checks if `$name` is defined or not. Since it's not defined, `$name` is assigned the value "John Smith".

Here's another example:

```
my $age = 28;
$age ||= 30;
```

In this example, `$age` is already defined with the value 28. The `||=` operator checks if `$age` is defined or not. Since it's already defined, `$age` is not assigned the value 30.

Note that the `||=` operator assigns the new value only if the variable is undefined. If the variable has a false value (such as 0 or the empty string), it will still be assigned a new value using `||=`. If you want to check for definedness and truthfulness, you can use the `//=` operator instead.