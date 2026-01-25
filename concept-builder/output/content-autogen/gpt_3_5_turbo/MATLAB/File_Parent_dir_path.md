In MATLAB, you can use the built-in `fileparts` function to get the path to the parent directory of a given file or folder. Here's how you can use it:

Example 1: Get parent directory of a file

Suppose you have a file `C:\Users\John\Documents\MyFile.txt` on a Windows computer and you want to get the path to its parent directory. You can use the `fileparts` function in the following way:

```matlab
filePath = 'C:\Users\John\Documents\MyFile.txt';
[parentDir, ~, ~] = fileparts(filePath);
disp(parentDir);
```

This will output `C:\Users\John\Documents`.

Example 2: Get parent directory of a folder

Suppose you have a folder `C:\Users\John\Documents\MyFolder` on a Windows computer and you want to get the path to its parent directory. You can use the `fileparts` function in the following way:

```matlab
folderPath = 'C:\Users\John\Documents\MyFolder';
[parentDir, ~, ~] = fileparts(folderPath);
disp(parentDir);
```

This will output `C:\Users\John\Documents`.

Note that the second and third output arguments of the `fileparts` function are used to get the file name and file extension, respectively, and we ignore them by placing the tilde (`~`) symbol in their place.