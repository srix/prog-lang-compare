Sure, here is a brief explanation with examples on how to read a file in MATLAB:

MATLAB provides several ways to read a file. Here are a few methods to read a file in MATLAB:

Method 1: Using 'fopen', 'fscanf', and 'fclose' functions:

The 'fopen' function opens a file and returns a file identifier. The 'fscanf' function reads data from the file and the 'fclose' function closes the file. Here's an example:

```matlab
% Open the file
fid = fopen('filename.txt', 'r');

% Read in the data
data = fscanf(fid, '%f');

% Close the file
fclose(fid);
```

Method 2: Using 'load' function:

The 'load' function reads data from a file and creates variables in the workspace. Here's an example:

```matlab
% Load the data from the file
load('filename.mat');
```

Method 3: Using 'csvread' function:

The 'csvread' function reads data from a comma-separated value (CSV) file. Here's an example:

```matlab
% Read the data from a CSV file
data = csvread('filename.csv');
```

These are just a few examples of how to read a file in MATLAB. There are other functions like 'textscan', 'dlmread', 'xlsread' that can be used based on the type of data and file format.