In PHP, the times function can be used to repeat a piece of code a certain number of times. 

Here is an example code:

```php
for ($i = 1; $i <= 10; $i++) {
    echo "This is loop number $i <br>";
}
```

This code will print the string "This is loop number X" 10 times, where X is the loop number.

Another example using the times function:

```php
$times = 5;

for ($i = 0; $i < $times; $i++) {
    echo "This is iteration number $i <br>";
}
```

This code will print the string "This is iteration number X" 5 times, where X is the iteration number.

You can also use the times function in a more compact way using the array_fill and array_map functions:

```php
$times = 3;

$range = range(1, $times);

$array = array_fill(0, $times, "Hello");

$output = array_map(function($number, $word) {
    return "This is loop number $number and the word is $word<br>";
}, $range, $array);

foreach ($output as $value) {
    echo $value;
}
```

This code will print the string "This is loop number X and the word is Hello" 3 times, where X is the loop number.