Sure, here's an explanation with examples:

In Perl, to remove leading and trailing whitespaces from a string, you can use the `s/^\s+|\s+$//g` regular expression substitution operator. This replaces all leading (`^\s+`) and trailing (`\s+$`) whitespaces with an empty string (`''`).

For example, consider the following Perl code:

```perl
my $string = "  Hello, world!   ";
$string =~ s/^\s+|\s+$//g;

print "String with leading and trailing whitespaces removed: '$string'\n";
```

Output:

```
String with leading and trailing whitespaces removed: 'Hello, world!'
```

In this example, the `s/^\s+|\s+$//g` operator matches the leading and trailing whitespaces in the string `"  Hello, world!   "`, and replaces them with an empty string, resulting in the string `"Hello, world!"`.

Note that the `g` modifier at the end of the substitution operator means that it should replace all occurrences of the pattern in the string, not just the first one. If you omit it, only the first occurrence will be replaced.

I hope this helps! Let me know if you have any questions.