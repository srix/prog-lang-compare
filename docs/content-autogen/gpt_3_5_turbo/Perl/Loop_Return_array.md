In Perl, an array can be returned from a subroutine as follows:

```
sub get_array {
    my @array = (1, 2, 3, 4, 5);
    return @array;
}

my @arr = get_array();
print "@arr\n"; # output: 1 2 3 4 5
```

In the above example, `get_array()` subroutine creates an array `@array` and returns it using the `return` statement. The returned array is then assigned to another array `@arr`.

Another way of returning an array from a subroutine is by returning a reference to the array using the backslash `\` operator as follows:

```
sub get_array_ref {
    my @array = (1, 2, 3, 4, 5);
    return \@array;
}

my $arr_ref = get_array_ref();
my @arr = @{$arr_ref};
print "@arr\n"; # output: 1 2 3 4 5
```

In this example, `get_array_ref()` creates an array `@array`, returns a reference to the array using the `\` operator, and assigns it to a scalar variable `$arr_ref`. The reference is then dereferenced using the `@{$arr_ref}` syntax to obtain the original array.