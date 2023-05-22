In Perl, there are several ways to remove part of a string, depending on what specific part you want to remove and how you want to perform the removal operation. Here are some examples:

1. Removing a specific substring: If you know the exact substring that you want to remove from a string, you can use the `s///` regex substitution operator to replace it with an empty string. For example:

```
my $str = "remove this text please";
$str =~ s/this//;
print $str; # outputs "remove  text please"
```

In this example, the `s///` operator replaces the first occurrence of the substring "this" in `$str` with an empty string, effectively removing it from the string.

2. Removing a range of characters: If you want to remove a specific range of characters from a string based on their position, you can use the `substr()` function to extract the parts of the string that you want to keep and concatenate them together. For example:

```
my $str = "remove these letters please";
$str = substr($str, 0, 7) . substr($str, 13);
print $str; # outputs "remove letters please"
```

In this example, the `substr()` function is used to extract the first 7 characters of `$str` (up to the space after "remove") and concatenate it with the substring that starts at position 13 (after "these") and extends to the end of the string. This effectively removes the characters between positions 7 and 13 from the string.

3. Removing whitespace: If you want to remove all whitespace characters (spaces, tabs, and newlines) from a string, you can use the `s/\s//g` regex substitution operator. For example:

```
my $str = "   remove    \n   whitespace please    ";
$str =~ s/\s//g;
print $str; # outputs "removewhitespaceplease"
```

In this example, the `s/\s//g` operator removes all whitespace characters from `$str`, including the leading and trailing spaces and the newline character, by replacing them with an empty string. The `/g` modifier ensures that all occurrences of the regex pattern are replaced, not just the first one.