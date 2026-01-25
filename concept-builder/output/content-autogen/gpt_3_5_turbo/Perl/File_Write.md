In order to write a file in Perl, you can use the `open` function to open the file and provide a file handle to read/write the file. Here is an example of how to open a file in write mode and add some text to it:

```
# Open file in write mode
open(my $fh, '>', 'output.txt') or die "Could not open file: $!";

# Write text to file
print $fh "Hello, world!\n";
print $fh "This is a sample text\n";
print $fh "End of file.\n";

# Close the file handle
close $fh;
```

In this example, the `open` function opens a file named `output.txt` in write mode, designated by the `>` symbol. If the file does not exist, it will be created. If the file already exists, the function will truncate the file content and start writing from the beginning.

After opening the file handle, you can use the `print` function to write text to the file. The `print` function sends the text to the file handle, designated by `$fh` in this case.

Finally, you should always close the file handle once you are done writing to the file.

Alternatively, you can use the `say` function to write text to the file instead of the `print` function. The `say` function automatically adds a newline character at the end of the text:

```
# Open file in write mode
open(my $fh, '>', 'output.txt') or die "Could not open file: $!";

# Write text to file using say function
say $fh "Hello, world!";
say $fh "This is a sample text";
say $fh "End of file.";

# Close the file handle
close $fh;
```