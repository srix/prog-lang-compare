In Perl, we can declare a method or function using the `sub` keyword. Here is an example of how to declare a function that takes two arguments and returns their sum:

```
sub add_numbers {
    my ($num1, $num2) = @_;
    my $sum = $num1 + $num2;
    return $sum;
}
```

In the above example, we have defined a function called `add_numbers` which takes two arguments, `$num1` and `$num2`. 

The `my` keyword is used to declare local variables within the function. Here we are declaring `$sum` as a variable to hold the sum of the two input numbers.

The arithmetic operation of `$num1 + $num2` is used to calculate their sum, which is then assigned to the `my` variable `$sum`.

Finally, the `return` statement is used to return the computed sum to the caller of the function.

Here is an example of how to use the above function:

```
my $result = add_numbers(5, 10);
print "The sum of 5 and 10 is $result\n";
```

In the above example, we are passing the numbers `5` and `10` as arguments to the `add_numbers` function. 

The function computes their sum, which is then stored in the `$result` variable.

Finally, we are using the `print` statement to display the computed sum to the user. 

The output of the above code will be: `The sum of 5 and 10 is 15`.