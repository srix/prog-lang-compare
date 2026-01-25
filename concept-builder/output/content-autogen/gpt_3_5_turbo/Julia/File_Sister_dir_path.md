In Julia, the `dirname` function from the `Base` library can be used to obtain the path of the parent directory of a given file path. To get the path of the sibling directory of a file path, the `joinpath` function can be used to concatenate any number of paths into a single path.

Here's an example code snippet to illustrate this:

```julia
using Base.Filesystem

# Define a path to a file
file_path = "./path/to/some/file.txt"

# Obtain the parent directory path
parent_dir_path = dirname(file_path)

# Define the sibling directory name
sibling_dir_name = "sibling"

# Concatenate the parent directory path and the sibling directory name to obtain the sibling directory path
sibling_dir_path = joinpath(parent_dir_path, sibling_dir_name)

# Print the resulting sibling directory path
println(sibling_dir_path)   # Output: ./path/to/sibling
```

In this example, the `dirname` function is used to obtain the `./path/to/some` parent directory path of the `file_path` variable. Then, the `sibling_dir_name` variable is defined with the desired name of the sibling directory. Finally, the `joinpath` function is used to concatenate the `parent_dir_path` and `sibling_dir_name` variables to obtain the resulting `sibling_dir_path`, which is printed to the console.