In PHP, you can easily get the size of an array using the count() function. The count() function returns the number of elements in an array.

Here is an example code that shows how to get the size of an array in PHP:

```
$myArray = array('apple', 'banana', 'orange', 'grape');
$size = count($myArray);

echo 'The size of $myArray is ' . $size;
```

Output:
```
The size of $myArray is 4
```

Another example:

```
$anotherArray = array(4, 8, 15, 16, 23, 42);
$size = count($anotherArray);

echo 'The size of $anotherArray is ' . $size;
```

Output:
```
The size of $anotherArray is 6
```

You can also use the sizeof() function, which is essentially an alias of count(). Both functions return the same value.