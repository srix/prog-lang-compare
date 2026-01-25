Getting the square root of a number in PHP is pretty simple. The built-in `sqrt()` function can be used to compute the square root of a number.

Syntax:

```
sqrt(number)
```

Here's an example:

```php
$number = 9;
$squareRoot = sqrt($number);
echo "The square root of {$number} is {$squareRoot}.";
```

Output:

```
The square root of 9 is 3.
```

You can also use the `sqrt()` function in mathematical expressions:

```php
$a = 25;
$b = 16;
$c = sqrt($a) + sqrt($b);
echo "The result is: {$c}";
```

Output:

```
The result is: 9
```