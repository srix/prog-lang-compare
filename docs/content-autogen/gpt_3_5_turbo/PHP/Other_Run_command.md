To run a command in PHP, you can use the `exec()` function, which runs a command and returns the output as a string. Here's an example:

```
$command = 'ls -l'; // command to list files with file permissions
$output = exec($command);
echo $output;
```

In this example, the `ls -l` command is run to list all files in the current directory along with their file permissions. The output of the command is then stored in the `$output` variable and then printed using the `echo` statement.

Another example can be using `shell_exec()` function:

```
$command = 'cat /usr/share/dict/words'; // command to display words from dictionary
$output = shell_exec($command);
echo $output;
```

In this example, the `cat /usr/share/dict/words` command is run to display the content of the dictionary file. The output of the command is stored in the `$output` variable and then printed using the `echo` statement.