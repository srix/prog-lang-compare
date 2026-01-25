To get the parent directory path in Rust 1.55, you can use the `parent()` method provided by the `Path` struct, which returns an `Option<&Path>` referencing the parent directory of the `Path`.

Here's an example to get the parent directory path of a file:

```rust
use std::path::Path;

fn get_parent_dir_path(file_path: &Path) -> Option<&Path> {
  file_path.parent()
}

fn main() {
  let file_path = Path::new("/home/user/documents/sample.txt");

  if let Some(parent_dir) = get_parent_dir_path(&file_path) {
    println!("Parent directory path: {}", parent_dir.display());
  } else {
    println!("No parent directory found.");
  }
}
```

Output:
```
Parent directory path: /home/user/documents
```

You can also use the `parent()` method multiple times to get the parent directory at a higher level. For example, calling `parent().parent()` will return the grandparent directory path.