In PHP, you can read a file using the `fopen()` function to open the file and `fread()` function to read the contents of the file. 

Here is an example code snippet to read a file and output its content:

```php
$file = fopen("example.txt","r");

while(! feof($file))
{
  echo fgets($file). "<br>";
}

fclose($file);
```

In this example, the `fopen()` function is used to open the file `"example.txt"` in read mode, which returns a file pointer. Then, a while loop is used along with `feof()` function to check whether the end of the file has reached or not. The `fgets()` function reads a line from the file, and `echo` statement prints the line on the screen along with an HTML line break. Finally, the `fclose()` function is used to close the file pointer.