In Ruby, you can write to a file with the help of the File class. Here is an example of how to write to a file:

```ruby
# Open the file in write mode
File.open('output.txt', 'w') do |file|
  # Write to the file
  file.write('Hello, world!')
end
```

In this example, we are creating a new file called `output.txt` if it doesn't exist and opening it in write mode (`'w'`). The `File.open` method is called with a block, and the block variable `file` represents the file object that we can use to write to the file. 

Inside the block, we call the `write` method on the file object to write the string `'Hello, world!'` to the file. 

After the block is executed, the file is automatically closed. 

You can also use the `puts` method to write to a file:

```ruby
# Open the file in write mode
File.open('output.txt', 'w') do |file|
  # Write to the file
  file.puts('Hello, world!')
end
```

The `puts` method adds a newline character after the string, so the output will be on a new line. 

You can also use the `<<` method to write to a file:

```ruby
# Open the file in write mode
File.open('output.txt', 'w') do |file|
  # Write to the file
  file << 'Hello, world!'
end
```

The `<<` method works like the `write` method, but it appends the string to the file instead of overwriting it.