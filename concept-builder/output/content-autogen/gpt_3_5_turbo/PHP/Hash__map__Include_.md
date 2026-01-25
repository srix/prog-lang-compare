In PHP, you can check if a specific key exists in a hash using the `array_key_exists()` function or the `isset()` function.

Here are examples using both methods:

Method 1: Using `array_key_exists()`

```
// Define a hash
$person = array(
    "name" => "John",
    "age" => 30,
    "gender" => "male"
);

// Check if a key exists in the hash
if (array_key_exists("name", $person)) {
    echo "The 'name' key exists in the hash.";
} else {
    echo "The 'name' key does not exist in the hash.";
}
```

Output:

```
The 'name' key exists in the hash.
```

Method 2: Using `isset()`

```
// Define a hash
$person = array(
    "name" => "John",
    "age" => 30,
    "gender" => "male"
);

// Check if a key exists in the hash
if (isset($person["name"])) {
    echo "The 'name' key exists in the hash.";
} else {
    echo "The 'name' key does not exist in the hash.";
}
```

Output:

```
The 'name' key exists in the hash.
```

Both methods accomplish the same thing, but `isset()` can be used to check if a variable exists and is not null in addition to checking if a key exists in a hash.