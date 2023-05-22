In Ruby, getting the sister directory path can be done using the `File.dirname` method.

Here's an example:

Suppose we have the following directory structure:
```
parent_dir/
├── sister_dir/
└── current_dir/
```

If we're currently in the `current_dir`, we can get the path of the `sister_dir` like this:

```ruby
sister_dir_path = File.join(File.dirname(__dir__), "sister_dir")
puts sister_dir_path
# Output: /path/to/parent_dir/sister_dir
```
In the above example, `__dir__` gives us the absolute path to the current directory (`current_dir`). We then use `File.dirname` to remove the last part of the path (i.e. `current_dir`), leaving us with the path to the parent directory. We then use `File.join` to append the name of the sister directory (`sister_dir`) to the parent directory path, giving us the final path to the `sister_dir`.

Another example:
```ruby
require 'pathname'

current_dir_path = Pathname.new(__FILE__).realpath.parent.to_s
sister_dir_path = File.join(File.dirname(current_dir_path), "sister_dir")
puts sister_dir_path
# Output: /path/to/parent_dir/sister_dir
```

In this example, we're using `Pathname` to get the absolute path of the current directory (`current_dir`). We then use `File.dirname` to remove the last part of the path (i.e. `current_dir`), leaving us with the path to the parent directory. We then use `File.join` to append the name of the sister directory (`sister_dir`) to the parent directory path, giving us the final path to the `sister_dir`.