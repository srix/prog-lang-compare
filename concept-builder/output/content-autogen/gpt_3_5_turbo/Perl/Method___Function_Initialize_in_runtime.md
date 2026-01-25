In Perl, you can create and initialize a method or function in runtime using the "eval" function. The "eval" function takes a string argument containing the code to be evaluated. Here's an example:

```
# create and initialize a function in runtime
my $function_code = q{
    sub add_numbers {
        my ($x, $y) = @_;
        return $x + $y;
    }
};
eval $function_code;

# call the function
my $result = add_numbers(3, 5);
print $result . "\n";
```

In this example, we define a function called "add_numbers" using a string containing the function code. Then, we pass that string to the "eval" function to initialize the function at runtime. Finally, we call the function and print the result.

You can also use the same technique to create and initialize methods of an object. Here's an example:

```
# create and initialize a method in runtime
my $method_code = q{
    sub print_name {
        my $self = shift;
        print "My name is $self->{name}\n";
    }
};
eval $method_code;

# create an object
my $person = {
    name => "Alice",
};

# call the method
$person->print_name();
```

In this example, we define a method called "print_name" using a string containing the method code. Then, we pass that string to the "eval" function to initialize the method at runtime. Finally, we create an object and call that method on it to print the person's name.