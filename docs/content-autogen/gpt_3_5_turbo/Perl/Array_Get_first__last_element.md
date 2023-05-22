To get the first and last element of an array in Perl, you can use the index values of the array.

Example:

```perl
# Initializing an array
my @arr = (1, 2, 3, 4, 5);

# Getting the first element of the array
my $first = $arr[0];
print "First element: $first\n";

# Getting the last element of the array
my $last = $arr[$#arr];
print "Last element: $last\n";
```

Output:
```
First element: 1
Last element: 5
```

In the above example, we initialized an array of integers. The first element of the array is obtained by using the index value of 0. The last element of the array is obtained by using the index value `$#arr`, which is the number of elements in the array minus 1.