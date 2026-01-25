In MATLAB, we can obtain the file path by using the `which` and `pwd` functions.

The `which` function returns the full path of a specified file:

```matlab
path = which('filename.ext')
```

For example, if we want to get the file path of a file named "mydata.txt", we can use:

```matlab
path = which('mydata.txt')
```

The `pwd` function returns the current working directory path:

```matlab
path = pwd
```

For example, if our current working directory is "C:\Users\Username\Documents", then `pwd` will return:

```matlab
path = 'C:\Users\Username\Documents'
```

We can combine these functions to get the absolute path of a file in the current working directory:

```matlab
filepath = fullfile(pwd, 'filename.ext')
```

For example:

```matlab
filepath = fullfile(pwd, 'mydata.txt')
```

This will return the file path as a string:

```matlab
filepath = 'C:\Users\Username\Documents\mydata.txt'
```