Reading a file in Lua can be done using the `io` library. Here's an example code snippet that demonstrates how to read a file in Lua:

```
--Open the file in read-only mode
local file = io.open("example.txt", "r")

--Read the contents of the file
local contents = file:read("*all")

--Close the file
file:close()

--Print the contents of the file
print(contents)
```

In this code snippet, we use `io.open` to open the file in read-only mode. The first argument is the name of the file we want to open, and the second argument, `"r"`, specifies that we want to open the file in read-only mode. 

Next, we use `file:read("*all")` to read the entire contents of the file into a Lua string. We then close the file using `file:close()`.

Finally, we print the contents of the file using `print(contents)`.

Note that the `io.open` function returns a file handle, which we can use to perform other file operations. For example, if we want to read the file line by line, we can use `file:read("*line")` instead of `file:read("*all")`. We can also specify the number of bytes we want to read using `file:read(n)`, where `n` is the number of bytes we want to read.