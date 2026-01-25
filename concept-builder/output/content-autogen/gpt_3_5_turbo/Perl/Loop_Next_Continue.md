In Perl, `next` and `continue` are control statements used in loop constructs. 

`next` statement is used to skip to the next iteration of the loop immediately. Here is an example of using `next` in a `for` loop to print only odd numbers:

```
for my $num (1..10) {
   if($num % 2 == 0) { # if the number is even 
      next;  # skip to the next iteration immediately without printing
   }
   print $num."\n";
}
```

In this example, `next` is used to skip printing even numbers and proceeding to the next iteration of the loop.

`continue` statement is used to skip to the next iteration of the loop after executing the current iteration. Here is an example of using `continue` in a `while` loop to print only odd numbers:

```
my $num = 1;
while($num <= 10) {
   if($num % 2 == 0) { # if the number is even 
      $num++;
      next;  # skip to the next iteration after incrementing the number 
   }
   print $num."\n";
   $num++;
   continue;  # skip to the next iteration after incrementing the number 
}
```

In this example, `continue` is used to skip to the next iteration after printing odd numbers and incrementing the value of the loop variable `$num`.