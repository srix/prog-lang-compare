To import data from another file in MATLAB, you can use the `importdata()` function. This function reads the data from a file and returns a structured array that you can use to manipulate the data.

Here's an example of how to import a .txt file:

```
data = importdata('sample.txt'); % Replace 'sample.txt' with your file name
```

This will read the data from the file and store it in the `data` variable. You can then access the data using the structure fields, like this:

```
x = data.data(:,1); % This will select the first column of data
y = data.data(:,2); % This will select the second column of data
```

You can also import data from other file formats such as .csv, .xls, or .xlsx by using the following functions:

- `csvread()` for .csv files
- `xlsread()` for .xls and .xlsx files

Here's an example of how to import a .csv file:

```
data = csvread('sample.csv');
```

This will read the data from the file and store it in the `data` variable as a matrix. You can then access the data using matrix indexing, like this:

```
x = data(:,1); % This will select the first column of data
y = data(:,2); % This will select the second column of data
```

Note that these functions assume that the data in the file is numeric. If you need to import other types of data (e.g. strings), you will need to use a different function or parse the data yourself.