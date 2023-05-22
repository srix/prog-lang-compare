In Perl, we can create a string using single quotes or double quotes. 

To create a string using single quotes, simply enclose the string in single quotes. For example:

```
my $string1 = 'Hello, World!';
```

To create a string using double quotes, enclose the string in double quotes. Double quotes are useful if you need to include variables in your strings, as they allow for variable interpolation. For example:

```
my $name = 'John';
my $string2 = "Hello, $name!";
```

You can also use the concatenation operator (.) to join strings together. For example:

```
my $greeting = 'Hello, ';
my $name = 'John';
my $string3 = $greeting . $name;
```

The resulting string in this case would be "Hello, John".