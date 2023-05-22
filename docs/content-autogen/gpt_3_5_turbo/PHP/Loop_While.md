The `while` loop is used in PHP to execute a block of code repeatedly as long as a particular condition is true. Its syntax is as follows:

```
while (condition) {
  // block of code to be executed repeatedly
}
```

Here's an example of using `while` to print the numbers from 1 to 5:

```
$num = 1;

while ($num <= 5) {
  echo $num;
  $num++;
}
```

In this example, the `while` loop will continue executing the block of code as long as `$num` is less than or equal to 5. Inside the loop, we print the current value of `$num` to the screen using the `echo` statement, and then increment `$num` by 1 using the `$num++` statement. This will continue until `$num` is no longer less than or equal to 5.

Another example of using `while` is to loop through an array and perform an action on each element. Here's an example of adding up all the numbers in an array:

```
$numbers = array(1, 2, 3, 4, 5);
$total = 0;
$i = 0;

while ($i < count($numbers)) {
  $total += $numbers[$i];
  $i++;
}

echo $total;
```

In this example, we start with an array of numbers, and two variables: `$total` which we'll use to keep a running total of all the numbers, and `$i` which we'll use to keep track of the current index as we loop through the array. We then use `while` to loop through each element in the array, and add it to `$total`, incrementing `$i` by 1 each time. Finally, we print the sum of all the numbers to the screen using `echo`.