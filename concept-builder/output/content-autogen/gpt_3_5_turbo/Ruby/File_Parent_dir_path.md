In Ruby, we can get the parent directory path of a given path by using the `File.dirname` method.

Here's an example:

```ruby
path = "/home/user/documents/report.pdf"
parent_dir_path = File.dirname(path)
puts parent_dir_path
```

Output:
```
/home/user/documents
```

In the above code, we have assigned a path of a file to the `path` variable. Then, we have used the `File.dirname` method to get the parent directory path of the file.

This method returns the directory path of the file, without including the file name (if any) in it. Hence, we get the string `"/home/user/documents"`, which is the path of the parent directory of the file `report.pdf`.