Running a command in Perl primarily involves executing system commands or invoking external programs. 

Here are some examples of running a command in Perl:

1. Using the backtick (``) operator:
```
$result = `ls -l`;
print $result;
```
This command will execute the `ls -l` command to list the files in the current directory and store the output in `$result`. Then it will print the output using the `print` statement.

2. Using the `system` function:
```
system("ls -l");
```
This command will execute the same `ls -l` command to list the files in the current directory.

3. Using the `exec` function:
```
exec("ls -l");
```
This command is similar to the `system` function, but it does not return to the calling program and replaces the current process with the executed command.

4. Using the `qx` function:
```
$output = qx(ls -l);
print $output;
```
This command will execute the `ls -l` command and store the output in `$output`. Then it will print the output using the `print` statement.

Note that running external commands in Perl can be a security risk, so it is best to validate and sanitize any user input.