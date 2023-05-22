In R, you can get the parent directory path using the `dirname()` function. This function takes a file path as an argument and returns the directory (or parent directory) of that file. Here's an example:

```R
file_path <- "/Users/MyUser/Documents/R_scripts/myscript.R"
parent_dir_path <- dirname(file_path)
print(parent_dir_path)
```

Output:
```
[1] "/Users/MyUser/Documents/R_scripts"
```

In the above example, `dirname()` function returns the parent directory of the file path (`myscript.R`).