Replacing a substring within a string in Perl can be achieved using the `s/old_string/new_string/` operator. This operator stands for "substitute", and it is used to replace the first occurrence of a specified substring with a new string.

Here's a simple example to demonstrate how to replace a substring within a string in Perl:

```perl
$mystring = "The quick brown fox jumps over the lazy dog";
$mystring =~ s/brown/red/;
print $mystring;
```

In the code above, we first declare a variable named `$mystring` and assign it with a string that reads "The quick brown fox jumps over the lazy dog". We then use the `s/old_string/new_string/` operator to replace the substring `brown` with `red`. Finally, we print out the new string value.

The output of the code above would be:

```
The quick red fox jumps over the lazy dog
```

It's also possible to replace all occurrences of a specified substring by using the `g` (global) modifier. Here's an example:

```perl
$mystring = "The quick brown fox jumps over the lazy dog";
$mystring =~ s/o/O/g;
print $mystring;
```

In this example, we use the `s/old_string/new_string/g` operator to replace all occurrences of the letter `o` with an uppercase `O`. The output of the code would be:

```
The quick brOwn fOx jumps Over the lazy dOg
```

The `s/old_string/new_string/` operator can also be combined with regular expressions, allowing for more complex and flexible string manipulation.