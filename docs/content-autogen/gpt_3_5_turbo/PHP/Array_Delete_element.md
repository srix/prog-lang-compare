In PHP, we can delete an element from an array using the `unset()`function. Here are some examples of how to delete elements from an array in PHP:

### Example 1: Deleting an element with a known key
Suppose we have an array called `$fruits` that contains the names of some fruits, with their corresponding positions as keys:

```php
$fruits = array(
    0 => "apple",
    1 => "banana",
    2 => "orange",
    3 => "pineapple"
);
```
To delete the element with key `1` which is "banana", we can use the `unset()` function like this:

```php
unset($fruits[1]);
```

After running this code, the `$fruits` array will only contain three elements, without "banana".

### Example 2: Deleting an element with an unknown key

If we don't know the key of the element we want to delete, we can use a combination of `array_search()` and `unset()` functions to delete the element by its value.

Suppose we have an array called `$numbers`, and we want to remove the element that has the value "3":

```php
$numbers = array(1, 2, 3, 4, 5);
```
We can use `array_search()` to find the position of "3", and then use `unset()` to delete it:

```php
$key = array_search(3, $numbers);
unset($numbers[$key]);
```

After running this code, the `$numbers` array will only contain four elements, without "3".