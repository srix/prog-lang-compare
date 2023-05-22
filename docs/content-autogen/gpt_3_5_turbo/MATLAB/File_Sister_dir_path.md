In MATLAB, you can obtain the path of the parent directory using the `fileparts` function. Here's an example code snippet:

```matlab
% Obtain the current file path
currentPath = mfilename('fullpath');

% Get the path of its parent directory
[parentDirPath, ~, ~] = fileparts(currentPath);

% Get the path of its sister directory
sisterDirPath = fullfile(parentDirPath, 'sisterDirName');
```

This code first obtains the current file path using the `mfilename` function. It then uses the `fileparts` function to obtain the parent directory path. Finally, it uses the `fullfile` function to create the path of the sister directory by concatenating the parent directory path with the name of the desired sister directory (`sisterDirName` in this example).