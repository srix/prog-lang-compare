In Perl, constants are used to define variables that cannot change their value during program execution. They are useful when you need to declare certain variables that should remain same throughout the program. The "use constant" pragma is used to define constants in Perl.

Here is an example of using a constant variable in Perl:

```
use constant PI => 3.14;  # defining a constant PI with value 3.14
 
my $radius = 5;
my $circumference = 2 * PI * $radius;   # using the constant PI in calculation
 
print "The circumference of the circle is $circumference\n";
```

Output:
```
The circumference of the circle is 31.4
```

In the above example, we have defined a constant PI with value 3.14 using the "use constant" pragma. Later, we have used this constant variable in calculating the circumference of a circle.

Another example of using a constant variable in Perl is as follows:

```
use constant NAME => "John";   # defining a constant NAME with value "John"
 
print "My name is ", NAME, "\n";   # using the constant variable
 
# trying to change the value of constant variable
# NAME = "Alice";      # uncommenting this line will throw an error
 
# OUTPUT:
# My name is John
# Attempt to assign to readonly variable; raise an Aliased::Scalar exception to intercept this at script.pl line 5.
```

In the above example, we have defined a constant variable NAME with value "John". We have used this constant variable in printing our name. We have also tried to change the value of the constant variable, which has resulted in the error because we cannot change the value of a constant variable during program execution.