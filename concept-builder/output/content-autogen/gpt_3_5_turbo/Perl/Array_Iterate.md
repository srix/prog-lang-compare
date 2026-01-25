To iterate over an array in Perl, we can use a `for` loop or a `foreach` loop. Here's an example using a `for` loop:

```
my @colors = ('red', 'green', 'blue');

for my $i (0 .. $#colors) {
    print $colors[$i], "\n";
}
```

In this example, we use the `$#colors`variable as the end condition in the loop, which gives us the index of the last element in the `@colors` array.

We could also use a `foreach` loop:

```
my @colors = ('red', 'green', 'blue');

foreach my $color (@colors) {
    print "$color\n";
}
```

This example uses the `foreach` loop syntax to loop over each element in the `@colors` array, storing the value of each element in the `$color` variable. 

Both of these loops will produce the same output:

```
red
green
blue
```