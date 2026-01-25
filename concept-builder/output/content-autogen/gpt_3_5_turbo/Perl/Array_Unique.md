In Perl, you can get the unique elements of an array by using the `uniq` function from the List::MoreUtils module. Here's an example:

```
use List::MoreUtils qw(uniq);

my @numbers = (1, 2, 3, 4, 5, 2, 3, 4);
my @unique_numbers = uniq(@numbers);

print "Original array: @numbers\n";
print "Unique elements: @unique_numbers\n";
```

The output of this code will be:

```
Original array: 1 2 3 4 5 2 3 4
Unique elements: 1 2 3 4 5
```

As you can see, the `uniq` function removed the duplicate numbers from the original array and returned only the unique elements.