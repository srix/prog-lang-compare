In PHP, the `fwrite()` function is used to write data to a file. Here is an example:

```
// Open or create a file for writing
$file = fopen("data.txt", "w");

// Write data to the file
fwrite($file, "This is some text that we are writing to the file.");

// Close the file
fclose($file);
```

In this example, we create a new file called `data.txt` using the `fopen()` function with the `"w"` flag, which means "write mode". We then use the `fwrite()` function to write text to the file. Finally, we close the file using the `fclose()` function.

Another example shows how to write an array to a file:

```
// Create an array of data to write
$data = array(
    "First Name" => "John",
    "Last Name" => "Doe",
    "Email" => "johndoe@example.com"
);

// Open or create a file for writing
$file = fopen("data.txt", "w");

// Convert the array to a string and write it to the file
fwrite($file, serialize($data));

// Close the file
fclose($file);
```

In this example, we create an array of data and use the `serialize()` function to convert it to a string. We then write the string to the file using `fwrite()`. By serializing the array, we can later read it back from the file and convert it back into an array.