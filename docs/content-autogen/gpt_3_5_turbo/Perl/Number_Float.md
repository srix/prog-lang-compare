In Perl, float numbers are also known as floating-point numbers. Floating-point numbers are used to represent real numbers with a fractional part. These numbers can be positive, negative or zero. To use floating-point numbers in Perl, we can use the following syntax:

```
$num = 3.14;
```

Here, `$num` is a scalar variable that stores the floating-point value 3.14. We can perform various operations on this floating-point number, for example:

```
$num1 = 5.5;
$num2 = 2.5;

# Addition
$result = $num1 + $num2;
print "Addition Result: $result\n";

# Subtraction
$result = $num1 - $num2;
print "Subtraction Result: $result\n";

# Multiplication
$result = $num1 * $num2;
print "Multiplication Result: $result\n";

# Division
$result = $num1 / $num2;
print "Division Result: $result\n";
```

Output:
```
Addition Result: 8
Subtraction Result: 3
Multiplication Result: 13.75
Division Result: 2.2
```

Here, we performed arithmetic operations on two floating-point numbers `$num1` and `$num2` and stored the result in the variable `$result`. We then printed the result on the console.

Note that as with any programming language, floating-point operations may be subject to rounding errors due to the finite precision of floating-point numbers.