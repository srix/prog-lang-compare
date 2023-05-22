The ternary operator in Perl, denoted by `?`, is a shorthand form of if-else statement. Its syntax is:

`condition ? expression_if_true : expression_if_false`

If the condition is true, the expression before the colon `:` is evaluated, else the expression after the colon is evaluated.

Here's an example to illustrate:

```
# Assign variable x the value of y if z is true, else assign 0
$x = $z ? $y : 0;

# Print "Yes" if $flag is true, else print "No"
print $flag ? "Yes" : "No";
```

In the first example, if `$z` is true, then `$x` will be assigned the value of `$y`, else `$x` will be assigned 0.

In the second example, if `$flag` is true, then "Yes" will be printed, else "No" will be printed.

Ternary operator can also be nested inside each other. Here's an example:

```
# Assign variable x based on multiple conditions
$x = $a > $b ? ($a > $c ? $a : $c) : ($b > $c ? $b : $c);
```

In this example, if `$a` is greater than `$b`, then `$x` will be assigned the greater value of `$a` and `$c`. Else, if `$b` is greater than `$c`, then `$x` will be assigned the value of `$b`, else `$x` will be assigned the value of `$c`.