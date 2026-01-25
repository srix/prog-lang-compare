The current working directory in MATLAB can be determined using the function `pwd()`. This function returns the path to the current working directory in the form of a string value.

Here are some examples of how to use the `pwd()` function in MATLAB:

1. To simply display the current working directory path:

```
disp(pwd())
```

2. To assign the current working directory path to a variable:

```
currentDir = pwd();
```

3. To change the current working directory to a specific path:

```
cd('C:\Users\myusername\Documents\MATLAB')
```

Note that the path needs to be in the correct format for your operating system. In this example, the path is for a Windows machine.

4. To change the current working directory to a path relative to the current directory:

```
cd('..\myfolder')
```

This will change the current directory to the folder named `myfolder` that is located in the parent directory of the current working directory.

Overall, the `pwd()` function is a valuable tool for navigating and working with files in MATLAB.