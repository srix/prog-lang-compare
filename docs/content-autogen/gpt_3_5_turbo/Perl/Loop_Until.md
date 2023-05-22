In Perl, "until" is a loop construct that is used to execute a block of code repeatedly until a specified condition is true. The syntax for using "until" is as follows:

```
until (condition) {
   #block of code to execute
}
```

Here, "condition" is the expression that is evaluated in each iteration of the loop. If the condition is false, the block of code is executed. The loop will continue to execute until the condition is true.

For example, consider the following Perl script that uses "until" to print the numbers from 1 to 5:

```
$i = 1;
until ($i > 5) {
    print "$i\n";
    $i++;
}
```

In this script, the loop will continue to execute until $i is greater than 5. Each time the loop iterates, the value of $i is printed and incremented by 1.

Output:

```
1
2
3
4
5
```

Another example: the following Perl code uses "until" loop to read input from user until the entered value is a positive number:

```
my $num;
do {
    print "Enter a positive number: ";
    $num = <STDIN>;
} until $num > 0;

print "The entered number is $num";
```

This code will prompt the user to enter a positive number until a positive number is entered. When $num is greater than 0, the loop will terminate, and the entered number will be printed to the console.