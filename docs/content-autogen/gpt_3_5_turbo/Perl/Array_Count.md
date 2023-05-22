In Perl, you can count the number of elements in an array that matches a certain condition by using the `grep` function and then taking the size of the resulting array. 

Here's an example: let's say you have an array `@nums` containing some integers and you want to count the number of elements in the array that are greater than 10. You can use the following code:

```
my @nums = (5, 10, 15, 20, 25);
my @matching_nums = grep { $_ > 10 } @nums;
my $count = scalar @matching_nums;
print "There are $count numbers greater than 10 in the array.\n";
```

This code first uses `grep` to create a new array `@matching_nums` containing only the elements of `@nums` that are greater than 10. The `$_` variable represents the current element being processed in the loop. The `scalar` function is then used to get the size of the resulting array, which is stored in the `$count` variable. Finally, the script prints a message indicating the number of elements found.

The output of this script would be:

```
There are 3 numbers greater than 10 in the array.
```