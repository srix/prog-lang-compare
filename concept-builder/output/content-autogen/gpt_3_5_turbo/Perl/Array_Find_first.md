In Perl, the first element of an array can be accessed using its index value which is always 0. Here's an example:

```perl
my @array = ("apple", "banana", "orange");
my $first_element = $array[0];
print "The first element of the array is: $first_element\n";
```

In the example above, the `@array` variable is initialized with 3 elements. We then access the first element of the array using the `$array[0]` syntax and assign it to the `$first_element` variable. Finally, we print out the value of the `$first_element` variable using the `print` statement.

This will output the following:

```
The first element of the array is: apple
```

Note that we use the `@` symbol to declare an array in Perl, and the `$` symbol to declare a scalar variable that will hold a single value.