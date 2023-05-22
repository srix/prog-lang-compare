In Julia, the `dirname()` function can be used to get the parent directory path of a file or directory path. Here is an example:

```julia
julia> dirname("/path/to/file.ext")
"/path/to"

julia> dirname("/absolute/path/to/directory/")
"/absolute/path/to"

julia> dirname("relative/path/to/directory/")
"relative/path/to"
```

Here, the `dirname()` function takes a string argument representing a file or directory path and returns a string representing its parent directory path. If the argument is a path to a file, the function returns the path to the directory that contains the file. If the argument is a path to a directory, the function returns the path to its parent directory.

Note that the function works correctly with both absolute and relative paths.