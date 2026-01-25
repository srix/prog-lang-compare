Sure! In Ruby, you can get the directory path using the `Dir.pwd` method. 

Here's an example:

```ruby
puts Dir.pwd
```

The above code will print the current working directory path to the console. 

You can also use the `File.dirname` method to get the directory path of a specific file. Here's an example:

```ruby
file_path = "/users/username/documents/notes.txt"
dir_path = File.dirname(file_path)
puts dir_path
```

The above code will print the directory path of the `notes.txt` file to the console.

Hope that helps!