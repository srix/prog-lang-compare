In Perl, a while loop is used to execute a block of code repeatedly as long as a specific condition is being met. The general syntax of a while loop in Perl is as follows:

```
while (condition) {
   # statements to be executed repeatedly
}
```

Here's an example that prints out numbers from 1 to 5 using a while loop:

```
my $i = 1;
while ($i <= 5) {
   print($i . "\n");
   $i++;
}
```

In this example, the condition being tested is whether `$i` is less than or equal to `5`. As long as that condition holds true, the loop will continue to execute. The `$i` variable is incremented at the end of each iteration of the loop to ensure that the condition will eventually be false and the loop will terminate.

Here's another example that shows how to use the `last` statement to exit a while loop:

```
my $count = 1;
while (1) {
   print($count . "\n");
   $count++;
   last if $count > 5;
 }
```

In this example, the `while(1)` loop will continue indefinitely unless the `last` statement is executed. The `last` statement will cause the loop to exit as soon as the `$count` variable exceeds 5.