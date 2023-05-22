Sure, creating an array in PHP is quite simple. An array is a collection of similar or dissimilar data types. You can create an array by using the array() function, or by using the shorthand [] syntax.

Here are a few examples:

```php
//Creating an array with the array() function
$colors = array("Red", "Green", "Blue");
//Accessing an element of the array using its index
echo $colors[0]; //outputs: Red

//Creating an array with the [] syntax
$numbers = [1, 2, 3, 4, 5];
//Accessing an element of the array using its index
echo $numbers[3]; //outputs: 4

//Creating an associative array with the array() function
$person = array("name" => "John", "age" => 25, "city" => "New York");
//Accessing an element of the associative array using its key
echo $person["name"]; //outputs: John

//Creating an associative array with the [] syntax
$book = ["title" => "The Great Gatsby", "author" => "F. Scott Fitzgerald", "year" => 1925];
//Accessing an element of the associative array using its key
echo $book["year"]; //outputs: 1925
```

Remember that arrays in PHP are zero-indexed, meaning that the first element of an array is at index 0, the second is at index 1, and so on. Additionally, associative arrays use keys instead of indexes to access their values.