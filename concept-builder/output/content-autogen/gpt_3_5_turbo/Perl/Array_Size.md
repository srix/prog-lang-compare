In Perl, to get the size of an array, we can use either the scalar operator or the $#array variable. Here are some examples:

Using the scalar operator:
```
my @array = (1,2,3,4,5);
my $size = scalar(@array);
print "Size of array: $size\n";
```
Output: `Size of array: 5`

Using the $#array variable:
```
my @array = (1,2,3,4,5);
my $size = $#array + 1;
print "Size of array: $size\n";
```
Output: `Size of array: 5`

Note that `$#array` returns the index of the last element in the array, so we need to add 1 to get the size of the array.