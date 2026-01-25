Block binding in Perl refers to how variables are scoped within a particular code block. The `my` keyword can be used to declare a variable with block scope.

For example:

```
{
    my $x = 5; # $x is only visible within this block
    print $x; # prints 5
}
print $x; # throws an error because $x is not defined in this scope
```

Another example:

```
my $x = 10;
{
    my $x = 5; # this $x is a different variable from the previous $x
    print $x; # prints 5
}
print $x; # prints 10
```

In the above example, the first `$x` is defined outside the block, while the second `$x` is defined within the block. The first `$x` is visible outside of the block, while the second `$x` is only visible within the block.