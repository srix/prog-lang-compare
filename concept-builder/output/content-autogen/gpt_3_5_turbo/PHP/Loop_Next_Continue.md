In PHP, `next()` and `continue()` are two useful control structures used in loops. Here's how to use them:

1. `next()`: This function is used to advance the internal pointer of an array to the next element. It is commonly used inside a loop to iterate through an array. Here's an example:

```
$fruits = array('apple', 'banana', 'orange');

// loop through the array
foreach($fruits as $fruit) {
  if ($fruit == 'banana') {
    next($fruits); // this will skip 'banana'
    continue;
  }
  echo $fruit . '<br>';
}
```

In this code, the `next($fruits)` function is called inside the `if` statement when the current element is 'banana'. This will advance the pointer to the next element in the array, which is 'orange'. The `continue` statement is then used to skip the remaining code in the loop and move onto the next iteration.

2. `continue()`: This function skips the current iteration of a loop and moves onto the next one. Here's an example:

```
// loop through numbers 1 to 10
for ($i = 1; $i <= 10; $i++) {
  if ($i % 2 == 0) {
    continue; // skip even numbers
  }
  echo $i . '<br>';
}
```

In this code, the `continue` statement is used inside the `if` statement when the current value of `$i` is even. This will skip the remaining code in the loop for that iteration and move onto the next one. Therefore, only odd numbers will be printed.