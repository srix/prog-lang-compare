In Ruby, there are multiple ways to get the file path. Here are a few examples:

1. Using the `__FILE__` keyword:
   ```ruby
   puts __FILE__ #=> /path/to/current/file.rb
   ```
   This will return the file path of the current file.

2. Using the `File.dirname` method:
   ```ruby
   puts File.dirname(__FILE__) #=> /path/to/current
   ```
   This will return the directory path of the current file.

3. Using the `File.join` method to combine directory path and file name:
   ```ruby
   dir_path = '/path/to/directory'
   file_name = 'file.txt'
   puts File.join(dir_path, file_name) #=> /path/to/directory/file.txt
   ```
   This will return the complete file path by joining the directory path and file name.

4. Using command line arguments:
   ```ruby
   puts ARGV[0] #=> /path/to/file.txt
   ```
   This will return the first command line argument passed as a file path.