Sure, I can explain it to you.

To write a file in Python 3.10, we use the built-in `open()` function in write mode (`'w'`). Below is a simple example to write a text file in Python:

```python
# Open the file in write mode
file = open('example.txt', 'w')

# Write text to the file
file.write('Hello, world!\n')
file.write('Welcome to Python\n')

# Close the file
file.close()
```

In this code, we opened and created the file `example.txt` in write mode using the `open()` function. We then used the `.write()` method to write text to the file. 

Note that the `.write()` method does not add a newline character by default. So, we manually added a newline character (`\n`) at the end of the first line.

Finally, after writing the text, we closed the file using the `.close()` method.

You can now check the contents of the file by opening `example.txt`.

Hope, it helps. Let me know if you have any further questions.