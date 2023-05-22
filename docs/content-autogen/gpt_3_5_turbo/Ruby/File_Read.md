In Ruby, you can read a file using the built-in `File` class. Here's an example of how you can read a file:

```ruby
# open the file
file = File.open('filename.txt', 'r')

# read the contents of the file
file_contents = file.read

# close the file
file.close

# print the contents of the file
puts file_contents
```

In this example, we're opening a file named `filename.txt` in read mode (`'r'`). Then we read the contents of the file using the `read` method and assign it to the `file_contents` variable. Finally, we close the file using the `close` method.

Here's another example that demonstrates how to read a file line by line in Ruby:

```ruby
# open the file
File.open('filename.txt', 'r') do |file|
  # read the file line by line
  file.each_line do |line|
    # print each line to the console
    puts line
  end
end
```

In this example, we use the `File.open` method with a block to automatically close the file after we're done with it. We then use the `each_line` method to read the file line by line and print each line to the console.