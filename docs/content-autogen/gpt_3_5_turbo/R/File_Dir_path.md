In R, you can get the directory path using the `getwd()` function. 

For example, to get the current working directory path, you can simply type:

```
getwd()
```

This will output the directory path as a string, like so:

```
[1] "/Users/username/Documents"
```

If you want to set a new working directory, you can use the `setwd()` function, like so:

```
setwd("/Users/username/Documents/R")
```

This will set the working directory to a new location. 

You can also use the `dirname()` function to get the directory path of a specific file in R. 

For example, if you have a file called "example.txt" in your current working directory, you can get the directory path like so:

```
file_path <- "example.txt"
dirname(file_path)
```

This will output the directory path as a string, like so:

```
[1] "/Users/username/Documents/R"
```