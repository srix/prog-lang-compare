In Perl, you can split a string into multiple sub-strings using the split() function. The function takes two arguments – a regular expression and the string to be split.

Here is an example:

```
my $string = "Hello,world,how,are,you?";
my @words = split(/,/, $string);
print join("\n", @words);
```

In this example, we’ve defined a string variable named $string. We then use the `split()` function to split the string into sub-strings using comma as a delimiter. The resulting sub-strings are stored in an array variable @words. Finally, we use the `join()` function to print each of the sub-strings in a new line.

The output will be:

```
Hello
world
how
are
you?
```

Note that the single forward slash (/) before and after the comma delimiter is the regular expression syntax. You can use any other delimiter or regular expression pattern based on your requirements.