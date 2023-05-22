In Perl, you can compare numbers using comparison operators. The following operators are available:

- `==`     Equal to
- `!=`     Not equal to
- `<`      Less than
- `>`      Greater than
- `<=`     Less than or equal to
- `>=`     Greater than or equal to

Here are some examples to illustrate how to compare numbers in Perl:

```
my $num1 = 5;
my $num2 = 10;

if ($num1 == $num2) {
    print "The numbers are equal\n";
} else {
    print "The numbers are not equal\n";
}

if ($num1 < $num2) {
    print "$num1 is less than $num2\n";
} else {
    print "$num1 is greater than or equal to $num2\n";
}

if ($num2 >= $num1) {
    print "$num2 is greater than or equal to $num1\n";
} else {
    print "$num2 is less than $num1\n";
}
```

In the above example, we have declared two variables `$num1` and `$num2` and then used various comparison operators to compare these variables with each other. 

The first `if` statement compares if the two variables are equal or not. If they are equal, it will print "The numbers are equal," otherwise it will print "The numbers are not equal." 

The second `if` statement checks if `$num1` is less than `$num2` and prints an appropriate message based on the result. 

Lastly, the third `if` statement checks if `$num2` is greater than or equal to `$num1` and prints an appropriate message based on the result.