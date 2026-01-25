Sure.

In Perl, we can change all elements of an array using various methods. Here are a few examples:

1. Using a loop:

We can use a loop to iterate over all the elements of an array and change them one by one.

```
# Sample array
my @numbers = (1, 2, 3, 4, 5);

# Change all elements to 10
for (my $i = 0; $i < scalar(@numbers); $i++) {
    $numbers[$i] = 10;
}

# Print the changed array
print "@numbers\n";  # Output: 10 10 10 10 10
```

2. Using map:

The `map` function can be used to apply the same operation to every element of an array and store the results in a new array.

```
# Sample array
my @numbers = (1, 2, 3, 4, 5);

# Change all elements to even numbers
my @new_numbers = map { $_*2 } @numbers;

# Print the changed array
print "@new_numbers\n";  # Output: 2 4 6 8 10
```

3. Using a scalar assignment:

We can also use a scalar assignment to change all elements of an array to the same value.

```
# Sample array
my @numbers = (1, 2, 3, 4, 5);

# Change all elements to 0
@numbers = (0) x scalar(@numbers);

# Print the changed array
print "@numbers\n";  # Output: 0 0 0 0 0
```

These are just a few examples of how to change all elements of an array in Perl. The approach you choose will depend on what you're trying to accomplish.