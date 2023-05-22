In Perl, you can read a file by using the open function to open a filehandle, which allows you to access the contents of a file. The basic syntax for opening a file in Perl is:

`open(FILEHANDLE, "<filename>")`

Here, FILEHANDLE is the name of the filehandle you want to use, and "<filename>" is the name of the file you want to open for reading. 

To read the contents of the file, you can use the "while" loop in combination with the <FILEHANDLE> operator, which reads one line at a time from the file:

```
#!/usr/bin/perl
 
# Open the file 'example.txt' for reading
open(FILE, "<example.txt");
 
# Read the contents of the file
while(<FILE>) {
    # Do something with each line of the file
    print $_;
}
 
# Close the file
close FILE;
```

In this example, the "open" function is used to open the file "example.txt" for reading, and the while loop is used to read each line of the file. The "<FILE>" operator is used to retrieve each line of the file, which is then printed to the screen using the "print" function.

Note that it is important to close the filehandle when you are finished reading the file, which is done using the "close" function. This ensures that any resources used by the filehandle are released.