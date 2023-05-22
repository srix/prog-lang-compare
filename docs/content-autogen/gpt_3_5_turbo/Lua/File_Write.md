In Lua, you can write a file using the `io.open()` and `file:write()` functions.

Here is an example of how to write text to a file:

```
local filename = "example.txt"
local file = io.open(filename, "w") -- open the file for writing
file:write("Hello, world!\n") -- add text to the file
file:close() -- close the file
```

In this example, we first create a variable `filename` that specifies the name of the file we want to write to. We then use `io.open()` to open the file in write mode. If the file does not exist, it will be created.

We then use the `file:write()` function to add text to the file – in this case, the string "Hello, world!\n". The `\n` character is used to add a newline to the end of the string.

Finally, we close the file using `file:close()` to make sure that all of the data is saved.

You can modify this code to write other types of data to a file, such as numbers or binary data. Here's an example of how to write a table of numbers to a file:

```
local filename = "numbers.txt"
local data = {1, 2, 3, 4, 5}
local file = io.open(filename, "wb") -- open the file for writing binary data
for i = 1, #data do
  file:write(string.pack("i", data[i])) -- pack each number as a 32-bit integer and write to the file
end
file:close() -- close the file
```

In this example, we create a `data` table containing five numbers. We then use `io.open()` to open the file in binary mode (`"b"`) to write raw binary data. We then loop over each number in the `data` table and use `string.pack()` to pack each number as a 32-bit integer (`"i"`) before writing it to the file using `file:write()`. Finally, we close the file using `file:close()`.