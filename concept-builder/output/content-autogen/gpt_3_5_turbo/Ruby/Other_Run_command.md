To run a command in Ruby, you have to use the built-in method `system()` or backticks ````.

Here is an example of how to use `system()` method with a simple command to print out the current time:

```ruby
system("date")
```

This command will print out the current date and time on your computer's terminal.

Another example using backticks to list all files in the current directory:

```ruby
`ls`
```

This command will list all the files in the directory where the Ruby script is being executed.

You can also use the double quotes within these backticks to run commands with variables:

```ruby
directory_name = "my_directory"
`mkdir "#{directory_name}"`
```

This command will create a new directory with the name "my_directory". 

Note: be careful when running commands with user input variables, as it can be a security risk. It is important to sanitize and validate user input.