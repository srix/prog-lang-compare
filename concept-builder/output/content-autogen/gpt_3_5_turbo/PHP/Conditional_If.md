The `if` statement is used in PHP to execute a block of code if the specified condition is true. Here is the basic syntax for using `if` in PHP:

```
if (condition) {
  // code to execute if condition is true
}
```

Here are some examples:

Example 1: Check if a variable is greater than 10 and execute some code if true

```php
$num = 15;
if ($num > 10) {
  echo "The number is greater than 10";
}
```

Output:

```
The number is greater than 10
```

Example 2: Check if a user is logged in and display different content based on the result

```php
$userLoggedIn = true;

if ($userLoggedIn) {
  echo "Welcome, user!";
} else {
  echo "Please log in to access content";
}
```

Output:

```
Welcome, user!
```

Example 3: Check if an array contains a specific value and execute some code if true

```php
$fruits = array("apple", "banana", "orange");

if (in_array("banana", $fruits)) {
  echo "Found banana in the array";
}
```

Output:

```
Found banana in the array
```

Example 4: Check if two variables are equal and execute some code if true

```php
$name = "John";
$otherName = "Jane";

if ($name == $otherName) {
  echo "The names are the same";
} else {
  echo "The names are different";
}
```

Output:

```
The names are different
```