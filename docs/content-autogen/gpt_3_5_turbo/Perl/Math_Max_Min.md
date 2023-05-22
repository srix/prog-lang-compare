In Perl, we can use the built-in functions `max()` and `min()` to get the maximum and minimum of two numbers respectively. Here are some examples:

Example 1: Finding the maximum of two numbers

```
$a = 10;
$b = 20;
$max = max($a, $b);
print "The maximum of $a and $b is $max\n";
```
Output: The maximum of 10 and 20 is 20

Example 2: Finding the minimum of two numbers

```
$c = 5;
$d = 8;
$min = min($c, $d);
print "The minimum of $c and $d is $min\n";
```
Output: The minimum of 5 and 8 is 5

We can also use these functions with more than two numbers. For example:

```
@nums = (2, 4, 6, 8);
$max_num = max(@nums);
$min_num = min(@nums);
print "The maximum number in the array is $max_num\n";
print "The minimum number in the array is $min_num\n";
```
Output: The maximum number in the array is 8
        The minimum number in the array is 2

By using the `max()` and `min()` functions, we can easily find the maximum or minimum of two or more numbers in Perl.