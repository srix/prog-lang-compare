In Rust, the sister directory path of a given directory is the path to the directory that is located at the same level in the directory hierarchy as the given directory. Essentially, this means that it's the directory that shares the same parent as the given directory.

Here's an example of how you can get the sister directory path of a given directory using Rust's built-in `PathBuf` and `Path` types:

```rust
use std::path::{PathBuf, Path};

fn get_sister_dir_path(dir_path: &Path) -> Option<PathBuf> {
    if let Some(parent_dir) = dir_path.parent() {
        let mut sister_dir_path = parent_dir.to_path_buf();
        sister_dir_path.push("sister_directory");
        return Some(sister_dir_path);
    } else {
        return None;
    }
}
```

In this example, the `get_sister_dir_path` function takes a `Path` object that represents the directory whose sister directory path we want to obtain. Inside the function, we first check if the given directory has a parent directory by calling its `parent` method. If the directory has a parent, we create a new `PathBuf` object, representing the sister directory path. We append the string "sister_directory" to the path, which represents the name of the sister directory. Finally, we return the path as an `Option<PathBuf>` object, which allows us to handle the case where the given directory does not have a parent directory.

Here's an example usage of the `get_sister_dir_path` function:

```rust
fn main() {
    let dir_path = Path::new("/path/to/my/directory");
    if let Some(sister_dir_path) = get_sister_dir_path(&dir_path) {
        println!("The sister directory path is: {:?}", sister_dir_path);
    } else {
        println!("The given directory does not have a parent directory.");
    }
}
```

In this example, we first create a `Path` object representing the path to the directory whose sister directory path we want to obtain. We then call the `get_sister_dir_path` function with the directory path as an argument. If the function returns a `Some` value, we print the sister directory path using the `println!` macro. If the function returns a `None` value, we print a message indicating that the directory does not have a parent directory.