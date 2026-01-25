To find all elements of an array satisfying a certain condition in Perl, you can use the `grep` function. The `grep` function takes a block of code or a subroutine and an array as input, and returns a new array containing the elements of the original array for which the block or subroutine returns true.

Here's an example that demonstrates how to use `grep` to find all even numbers in an array:

```
my @numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

my @even_numbers = grep { $_ % 2 == 0 } @numbers;

print "@even_numbers\n"; # prints "2 4 6 8 10"
```

In this example, we declared an array `@numbers` containing the numbers 1 through 10. We then called the `grep` function with a block of code that checks if each element of the array is even (`$_ % 2 == 0`) and the `@numbers` array as input.

The `grep` function returned a new array containing only the even numbers in `@numbers`, which we assigned to the `@even_numbers` variable. We then printed this array using the `print` function.

You can replace the condition in the `grep` block of code with any other condition that you want to use to filter the array.