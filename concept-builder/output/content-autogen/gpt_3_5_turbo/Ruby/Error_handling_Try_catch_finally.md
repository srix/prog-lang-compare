In Ruby, try/catch/finally blocks can be implemented using the `begin`, `rescue`, and `ensure` keywords respectively. Here's how you can use them:

1. Try block: The code that you want to run which may raise an exception is enclosed in a `begin` block.

2. Catch/Rescue block: If an exception is raised in the "try" block, it is caught by a `rescue` block that is specified immediately after the `begin` block.

3. Finally block: The `ensure` block is always executed after the `begin` block, regardless of whether an exception was raised or not.

Here's an example:

```
begin
  # code that may raise an exception
  file = open("non_existent_file.txt")
rescue
  # code to execute if an exception is raised
  puts "Error: file not found"
ensure
  # code to always execute after begin block
  puts "Closing file"
  file.close unless file == nil
end
```

In the above example, the code tries to open a non-existent file and thus raises a `FileNotFoundError`. The exception is caught in the `rescue` block and the appropriate message is printed. Regardless of whether an exception was raised or not, the `ensure` block is always executed, which, in this case, closes the file if it was successfully opened.