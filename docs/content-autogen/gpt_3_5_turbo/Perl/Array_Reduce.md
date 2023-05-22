In Perl, you can reduce an array to a single value using the `reduce` function provided by the `List::Util` module. The `reduce` function takes a binary function as its first argument and an array as its second argument. It applies the binary function to the elements of the array, starting from the first element and accumulating the result until the last element of the array is reached.

Here is an example that demonstrates how to use the `reduce` function to find the sum of the elements in an array:

```
use List::Util qw(reduce);

my @array = (1, 2, 3, 4, 5);
my $sum = reduce { $a + $b } @array;

print "Sum of the array is: $sum\n";
```

Output:
```
Sum of the array is: 15
```

In this example, the `reduce` function takes a binary function `{ $a + $b }` as its first argument which adds the two elements `$a` and `$b` together. The `@array` is passed as the second argument to the `reduce` function. The `reduce` function applies the binary function to each consecutive pair of elements in the array, and returns the final result which is the sum of all elements in the array.

You can use other binary function to reduce the array to a single value, depending on what you want to do. For example, you can find the maximum element in an array by using the `reduce` function as follows:

```
use List::Util qw(reduce);

my @array = (9, 2, 3, 4, 5);
my $max = reduce { $a > $b ? $a : $b } @array;

print "Maximum element in the array is: $max\n";
```

Output:
```
Maximum element in the array is: 9
```

In this example, the `reduce` function takes a binary function `{ $a > $b ? $a : $b }` as its first argument which compares the two elements `$a` and `$b` and returns the larger one. The `@array` is passed as the second argument to the `reduce` function, and the `reduce` function applies the binary function to each consecutive pair of elements in the array, and returns the final result which is the maximum element in the array.