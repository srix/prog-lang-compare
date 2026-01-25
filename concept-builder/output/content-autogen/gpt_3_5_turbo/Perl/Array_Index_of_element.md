In Perl, you can use the 'grep' function to find the index of an element in an array. The 'grep' function takes a block of code that returns a Boolean value and applies it to each element of the array. It returns a list of elements for which the block returns true.

Here's an example:

```
my @array = qw(one two three four five);

my $index = grep { $array[$_] eq 'three' } 0..$#array;

print "The index of 'three' in the array is: $index\n";
```

In this example, the 'grep' function applies the block of code { $array[$_] eq 'three' } to each element of the array. The '$_' is a special Perl variable that contains the current element being evaluated. The block returns true when it finds the element 'three', and the 'grep' function returns a list of indices where this occurs. The '0..$#array' range operator returns a list of indices for all the elements in the array.

The scalar variable '$index' is assigned to the first (and in this case, only) element in the list returned by 'grep'. Therefore, it holds the index of the element 'three' in the array.

The output of this example is:

```
The index of 'three' in the array is: 2
```

This means that the element 'three' is located at index 2 in the array.