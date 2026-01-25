In R, to get the sister directory path, you can use the `dirname()` function. The `dirname()` function returns the directory path of the file path supplied as argument. To get the sister directory path, you can apply `dirname()` to the current working directory path and then apply `basename()` to the result to get the name of the sister directory.

Here's an example:

```R
# Set working directory
setwd("C:/Users/username/Documents/R/myproject/")

# Get sister directory path
sister_dir <- paste(dirname(getwd()), basename(dirname(getwd())-1), sep = "/")

# Print the sister directory path
sister_dir
```

Assuming that the working directory is "C:/Users/username/Documents/R/myproject/", `dirname()` will return "C:/Users/username/Documents/R/" and `basename()` will return "R". Hence, the full path of the sister directory will be "C:/Users/username/Documents/R/R".