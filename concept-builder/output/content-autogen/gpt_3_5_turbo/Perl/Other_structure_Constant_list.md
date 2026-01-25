In Perl, a constant is a read-only variable that is assigned only once and can't be changed thereafter. A constant list in Perl is a list of values that is declared as a constant and used throughout the program.

To declare a constant list in Perl, you need to use the `use constant` directive followed by the constant name, the constant value, and the semicolon. Here's an example:

```perl
use constant FRUITS => ("apple", "banana", "orange");
```

In this example, the constant name is "FRUITS" and its value is a list of three fruits.

Once you have declared a constant list, you can use it in your program by calling its name. Here's an example:

```perl
foreach my $fruit (FRUITS) {
    print $fruit . "\n";
}
```

In this example, the `foreach` loop iterates through each element of the `FRUITS` constant list and prints it on a new line.

Another example of using a constant list in Perl is to compare a variable with the elements of the list:

```perl
my $fruit = "apple";

if ($fruit eq FRUITS->[0]) {
    print "This is an apple.\n";
}
```

In this example, the `if` statement checks whether the value of the `$fruit` variable is equal to the first element of the `FRUITS` constant list, which is "apple". If the condition is true, the program prints "This is an apple." on the screen.

Overall, using a constant list in Perl can make your program more efficient and easier to maintain as you only need to declare the values of the list once and can use it multiple times throughout your program.