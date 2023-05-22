In Perl, the `if` statement is used to execute a block of code only if a certain condition is met. This allows you to create programs with more complex logic.

The `if` statement is typically used in the following way:

```
if (condition) {
    # Code to execute if condition is true
}
```

For example, if you want to print the message "The variable is greater than 10" only if a certain variable is greater than 10, you could use the following code:

```
my $variable = 15;

if ($variable > 10) {
    print "The variable is greater than 10\n";
}
```

Here's another example that uses `if` to determine whether a user's input is equal to a specific value:

```
print "What is your name? ";
my $name = <STDIN>;

if ($name eq "Bob\n") {
    print "Hello, Bob\n";
}
else {
    print "I don't know you\n";
}
```

In this example, if the user enters "Bob" as their name, the program will print "Hello, Bob". Otherwise, it will print "I don't know you". 

The `if-else` statement is also a common variation of the `if` statement and can be used in cases where you want to execute one block of code if the condition is true and another if it's false. Here's an example:

```
my $number = 5;

if ($number < 10) {
    print "The number is less than 10\n";
}
else {
    print "The number is greater than or equal to 10\n";
}
```

In this example, if the variable `$number` is less than 10, the program will print "The number is less than 10". Otherwise, it will print "The number is greater than or equal to 10".