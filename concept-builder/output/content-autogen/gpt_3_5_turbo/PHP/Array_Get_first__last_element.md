To get the first element of an array in PHP, you can use the array_shift() function or simply access the element with index 0. Here are some examples:

Using array_shift():

```php
$myArray = array('apple', 'banana', 'orange');
$firstElement = array_shift($myArray); // returns 'apple'
```

Using index:

```php
$myArray = array('apple', 'banana', 'orange');
$firstElement = $myArray[0]; // returns 'apple'
```

To get the last element of an array in PHP, you can use the array_pop() function or access the element with index count($array) - 1. Here are some examples:

Using array_pop():

```php
$myArray = array('apple', 'banana', 'orange');
$lastElement = array_pop($myArray); // returns 'orange'
```

Using index:

```php
$myArray = array('apple', 'banana', 'orange');
$lastElement = $myArray[count($myArray) - 1]; // returns 'orange'
```