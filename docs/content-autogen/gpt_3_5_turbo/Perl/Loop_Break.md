The `break` keyword is not directly available in Perl, but its functionality can be achieved using the `last` keyword. The `last` keyword allows the execution of the current loop to be halted prematurely.

Here's an example of how to use `last` to break out of a loop in Perl:

```
foreach my $i (1 .. 10) {
  if ($i == 5) {
    last; # break out of the loop when $i is 5
  }
  print "$i "; # print the value of $i
}
```

In this example, a `foreach` loop is used to iterate through the values of `$i` from 1 to 10. If the value of `$i` is equal to 5, the `last` keyword is used to break out of the loop. The output of the loop will be:

```
1 2 3 4
```

Note that the code inside the loop after the `last` statement will not be executed.

Another example using a `while` loop:

```
my $i = 1; 
while ($i <= 10) {
  if ($i == 5) {
    last; # break out of the loop when $i is 5
  }
  print "$i "; # print the value of $i
  $i++; # increment $i by 1
}
```

In this example, a `while` loop is used to iterate through the values of `$i` from 1 to 10. The `last` keyword is used to break out of the loop when the value of `$i` is equal to 5. The output of the loop will be:

```
1 2 3 4
```