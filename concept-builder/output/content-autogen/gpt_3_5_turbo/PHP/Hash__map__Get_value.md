In PHP, you can get the value of a key in a hash or associative array using the key name as below:

```
// Define an associative array or hash
$person = array(
    "name" => "John",
    "age" => 25,
    "city" => "New York"
);

// Get the value of the "name" key
$name = $person["name"];

// Output the value
echo $name;  // Output: John
```

You can also use the `array_key_exists()` function to check if a key exists in the hash before accessing its value as shown below:

```
// Check if the "gender" key exists in the hash
if (array_key_exists("gender", $person)) {
    // Get the value of the "gender" key
    $gender = $person["gender"];
    // Output the value
    echo $gender;
} else {
    // Output an error message
    echo "Gender not found";
}
```

Note that accessing a non-existent key in a hash results in an error. Hence, it is recommended to always check if a key exists before accessing its value to avoid errors.