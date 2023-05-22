In R, you can read a file using the "read.table" or "read.csv" functions. Both functions essentially do the same thing, the difference being that "read.csv" assumes that the file is a comma-separated values file, while "read.table" allows for more customizable options for reading in different types of files.

Here's an example of how to use "read.csv" to read in a file:

```R
my_data <- read.csv("my_file.csv", header = TRUE)
```

In this example, "my_file.csv" is the name of the file you want to read, and "header = TRUE" tells R that the file has column headers (if your file doesn't have headers, set this to "FALSE").

Here's an example of how to use "read.table" to read in a file:

```R
my_data <- read.table("my_file.txt", header = TRUE, sep = "\t")
```

In this example, "my_file.txt" is the name of the file you want to read, "header = TRUE" tells R that the file has column headers, and "sep = "\t"" tells R that the file is tab-separated (if your file is comma-separated, set this to "," instead).

Once you've read in the file, "my_data" will be a data frame in R containing the contents of the file. From there, you can use all of R's data manipulation functions to analyze the data however you like.