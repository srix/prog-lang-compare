Sure, I'd love to help you out with that! In Perl, we can iterate over a hash using a for loop, while loop or a foreach loop. Here are the examples of each method:

Using a for loop:

```
my %fruits = ('apple' => 2, 'orange' => 3, 'banana' => 5);

for my $key (keys %fruits) {
    print "$key: $fruits{$key}\n";
}
```

This will iterate over the keys of the `%fruits` hash using the `keys` function and print out each key and its corresponding value.

Using a while loop:

```
my %students = ('John' => 75, 'Mary' => 80, 'Harry' => 90);
my $key = each %students;

while ($key) {
    print "$key: $students{$key}\n";
    $key = each %students;
}
```

Here, we first use the `each` function to get the first key-value pair of the `%students` hash, then iterate over the rest of the pairs by calling `each` in a loop and printing out the key and value.

Using a foreach loop:

```
my %books = ('Harry Potter' => 'J.K. Rowling', 'To Kill a Mockingbird' => 'Harper Lee', 'The Great Gatsby' => 'F. Scott Fitzgerald');

foreach my $key (sort keys %books) {
    print "$key: $books{$key}\n";
}
```

This will iterate over the keys of the `%books` hash in sorted order using the `sort` function, and print out each key and its corresponding value.

I hope this helps! Let me know if you need any more information.