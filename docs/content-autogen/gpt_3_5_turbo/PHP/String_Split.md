In PHP, you can split a string into an array by using the `explode()` function. The function takes two arguments - the separator and the string to be split. It separates the string at the positions where the separator occurs and returns an array of substrings.

Example 1: Splitting a string with a space separator
```php
$string = "Hello World!";
$parts = explode(" ", $string);
print_r($parts);
```
Output:
```
Array
(
    [0] => Hello
    [1] => World!
)
```

Example 2: Splitting a string with a comma separator
```php
$string = "apple,banana,grape";
$parts = explode(",", $string);
print_r($parts);
```
Output:
```
Array
(
    [0] => apple
    [1] => banana
    [2] => grape
)
```

Example 3: Splitting a string with a hyphen separator
```php
$string = "PHP-is-awesome";
$parts = explode("-", $string);
print_r($parts);
```
Output:
```
Array
(
    [0] => PHP
    [1] => is
    [2] => awesome
)
```