In Ruby, there are two ways to add comments to your code. 

1. Single-line comments: 

To add a single-line comment in Ruby, prefix your comment with a hash character (#).

Here's an example:

```ruby
# This is a single-line comment in Ruby

puts "Hello, World!" # This line prints 'Hello, World!' to the console
```

In the example above, the first line is a comment and will not be executed as code when the program runs. The second line prints "Hello, World!" to the console and includes a comment explaining what the code does.

2. Multi-line comments:

To add a multi-line comment in Ruby, you can use =begin and =end. Everything between =begin and =end will be treated as a comment.

Here's an example:

```ruby
=begin
This is a multi-line comment in Ruby
You can write as much as you want between =begin and =end
=end

puts "Hello, World!" # This line prints 'Hello, World!' to the console
```

In the example above, everything between =begin and =end is a comment and will not be executed as code when the program runs. The second line prints "Hello, World!" to the console and includes a single-line comment explaining what the code does.