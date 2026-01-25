In Perl, a method or function can return a value using the `return` keyword. The `return` statement exits the method or function and returns the specified value to the calling program. 

Here is an example of how to define a function that returns the sum of two numbers in Perl:

```
sub add_numbers {
   my ($num1, $num2) = @_;
   my $sum = $num1 + $num2;
   return $sum;
}
```

In the above code, `add_numbers` is a function that takes two arguments `$num1` and `$num2`. The two input numbers are added together and stored in the variable `$sum`. The `return` statement returns the value of `$sum`.

To use this function, you can call it and assign the return value to a variable, like this:

```
my $result = add_numbers(5, 7);
```

In this example, the `add_numbers` function is called with the arguments `5` and `7`. The returned value, `12`, is stored in the variable `$result`.

Alternatively, you can also return a list of values from a function using the `return` statement separated by commas, like this:

```
sub get_name_and_age {
   my $name = "John";
   my $age = 30;
   return $name, $age;
}
```

In this example, the `get_name_and_age` function returns two values, `$name` and `$age`. To use this function, you can assign the return values to a list, like this:

```
my ($name, $age) = get_name_and_age();
```

In this example, the `get_name_and_age` function is called and the two returned values are assigned to the variables `$name` and `$age`.