To concatenate two arrays in Perl, you can use the `push` function or the `@` array concatenation operator. Here are the examples:

Using `push` function:

```
# Define two arrays
my @array1 = (1, 2, 3);
my @array2 = (4, 5, 6);

# Concatenate them using push function
push @array1, @array2;

# Print the concatenated array
print "@array1\n";   # It will print "1 2 3 4 5 6"
```

Using `@` array concatenation operator:

```
# Define two arrays
my @array1 = (1, 2, 3);
my @array2 = (4, 5, 6);

# Concatenate them using @ array concatenation operator
my @concatenated_array = (@array1, @array2);

# Print the concatenated array
print "@concatenated_array\n";   # It will print "1 2 3 4 5 6"
```

In both cases, we define two arrays (`@array1` and `@array2`) and then concatenate them into a new array (`@concatenated_array`) using either `push` function or `@` array concatenation operator. The resulting concatenated array is then printed to the console.