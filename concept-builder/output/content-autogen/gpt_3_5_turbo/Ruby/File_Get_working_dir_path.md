To get the current working directory in Ruby, the `Dir` class provides the `pwd` method. Here's an example:

```
# Get current working directory
dir_path = Dir.pwd
puts "Current working directory: #{dir_path}"
```

This will output the current working directory of your Ruby program. 

If you want to change the current working directory, you can use the `chdir` method also provided by the `Dir` class. For example:

```
# Change working directory
Dir.chdir('/path/to/new/dir')
puts "New current working directory: #{Dir.pwd}"
```

This will change the current working directory to `/path/to/new/dir` and output the new path.