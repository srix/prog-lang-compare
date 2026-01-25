In R, the working directory is the current directory in which R is running and all file operations are relative to this directory. To get the working directory path in R, we can use the `getwd()` function. Here is an example:

```
# Print the current working directory
getwd()

# Change the working directory to a new location
setwd("/path/to/new/directory")

# Print the new working directory
getwd()
```

The `getwd()` function returns a character string containing the absolute path of the current working directory. We can also use the `setwd()` function to change the current working directory to a new location by passing the new path as an argument. Once the working directory has been changed, we can call `getwd()` again to confirm that the new location is now the working directory.