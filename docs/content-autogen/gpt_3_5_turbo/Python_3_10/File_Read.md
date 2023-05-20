To read a file in Python 3.10, you can use the built-in `open()` function. It takes two arguments: the file name/path and the mode in which to open the file (`'r'` for read mode, `'w'` for write mode, `'a'` for append mode, and more).

Here is an example of how to read a file in Python 3.10:

```
# open the file in read mode
with open('file.txt', 'r') as file:
    # read the content of the file
    content = file.read()
    # print the content
    print(content)
```

In this example, `file.txt` is the name of the file that we want to read. The `with` statement ensures that the file will be properly closed after it has been read. 

The `read()` method is used to read the content of the file as a string. After reading the file, the content is printed using the `print()` function.

If you want to read the file line by line instead of reading the entire content at once, you can use the `readline()` method inside a loop. Here is an example:

```
# open the file in read mode
with open('file.txt', 'r') as file:
    # read each line of the file
    for line in file:
        # print the line
        print(line)
```

This code reads the file line by line using a `for` loop. The loop runs through each line of the file, and the `print()` function is used to print the current line.