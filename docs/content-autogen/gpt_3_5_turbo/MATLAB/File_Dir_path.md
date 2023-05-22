To get the current directory path in MATLAB, you can use the `pwd` command. This command returns a character vector containing the current working directory path. Here's an example:

```
currentDir = pwd;
disp(currentDir);
```

If you need to change the current directory to a specific path, you can use the `cd` command. Here's an example:

```
newDir = 'C:/Users/YourUsername/Documents/';
cd(newDir);
disp(pwd);
```

This will change the current directory to "C:/Users/YourUsername/Documents" and display the new directory path.