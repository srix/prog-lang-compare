In Julia, we can read a file using `open()` function to open the file and then read the contents using one of the various read functions.

Here's an example:

Suppose we have a file called `data.txt` in the same directory as the Julia code, that contains the following data:

```
1,John,Doe
2,Jane,Smith
3,Bob,Johnson
```

We can read this file using the following code:

```julia
# Open the file
file = open("data.txt")

# Read the contents of the file
contents = readlines(file)

# Close the file
close(file)
```

In this example, `open()` function is used to open the file and the returned file object is assigned to the variable `file`. `readlines()` function is used to read all the lines from the file and return them as an array of strings. Finally, `close()` function is used to close the file.

Now, we can print the contents of the file as follows:

```julia
for line in contents
    println(line)
end
```

This will print the following output:

```
1,John,Doe
2,Jane,Smith
3,Bob,Johnson
```

Alternatively, we could use the `readcsv()` function to read a CSV file directly into a matrix of values.

For example, suppose the contents of `data.txt` are stored in a CSV format, like below:

```
1,John,Doe
2,Jane,Smith
3,Bob,Johnson
```

We can read and print the contents of the file using the following code:

```julia
# Read data from CSV file
data = readdlm("data.txt", ',')

# Print each row of the data
for row in data
    println(row)
end
```

This will print the following:

```
1.0  3.0  6.0
2.0  4.0  7.0
3.0  5.0  8.0
```

Note that `readdlm()` function is used to read the data from CSV file. It takes the path of the file and the delimiter as its arguments. The delimiter used in this example is `,`. Also, the returned matrix contains floating-point numbers. To read strings instead, we can use `readdlm("data.txt", ',', String)`.