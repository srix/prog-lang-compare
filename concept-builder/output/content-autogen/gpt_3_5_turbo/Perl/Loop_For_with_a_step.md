In Perl, `for` is used to loop through a list of values. Here's the syntax for using `for` with a step:

```
for my $i ($start .. $end step $step) {
    # statements to be executed
}
```

In the above example, `start` is the starting point of the loop, `end` is the ending point of the loop, and `step` is the increment value for each iteration.

For example, let's say we want to print every other number from 1 to 10. We would use:

```
for my $i (1 .. 10 step 2) {
    print "$i\n";
}
```

This would output:

```
1
3
5
7
9
```

In another example, let's say we want to add the first 10 even numbers. We would use:

```
my $sum = 0;
for my $i (2 .. 20 step 2) {
    $sum += $i;
}
print "The sum of the first 10 even numbers is: $sum";
```

This would output:

```
The sum of the first 10 even numbers is: 110
```