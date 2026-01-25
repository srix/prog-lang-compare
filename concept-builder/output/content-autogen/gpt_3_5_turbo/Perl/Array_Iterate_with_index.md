In Perl, you can iterate over an array using a `for` loop. Here is an example of iterating over an array with index:

```
my @array = (1, 2, 3, 4, 5);

for my $i (0 .. $#array) {
  print "Index: $i, Value: $array[$i]\n";
}
```

In this example, the `for` loop is iterating over every index in the array (`0` to `$#array`, which is the highest index in the array) and storing the current index in the variable `$i`. The loop then uses the index to access the associated value in the array (`$array[$i]`) and prints both the index and value to the console.

Output:

```
Index: 0, Value: 1
Index: 1, Value: 2
Index: 2, Value: 3
Index: 3, Value: 4
Index: 4, Value: 5
```

This is a common pattern for iterating over arrays in Perl, as it allows you to both access the current index and value in the array within the loop.