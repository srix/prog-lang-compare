In PHP, the `until` loop is not a standard looping construct. However, you can use a `do-while` loop with a negated condition to achieve the same effect as an `until` loop. Here's an example:

```
$i = 0;
do {
    echo $i . "\n";
    $i++;
} while ($i < 10);
```

This code will output the numbers 0 to 9. Alternatively, you can use a traditional `while` loop with a negated condition to achieve the same effect:

```
$i = 0;
while (!($i >= 10)) {
    echo $i . "\n";
    $i++;
}
```

Both of these examples will effectively loop until the condition is false, which achieves the same effect as an `until` loop.