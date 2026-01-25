In Perl, we can get the size of a hash using the `scalar` function. The `scalar` function returns the number of key-value pairs in the hash.

Here's an example:

```
# declaring a hash
my %hash = (
    "apple" => 2,
    "orange" => 3,
    "banana" => 4
);

# getting the size of the hash using scalar function
my $hash_size = scalar keys %hash;

print "The size of the hash is $hash_size.\n";
```

Output:
```
The size of the hash is 3.
```

In the above example, the `scalar` function is used with the `keys` keyword to return the number of keys in the hash `%hash`. Finally, we assign the result to the scalar variable `$hash_size` and print it.