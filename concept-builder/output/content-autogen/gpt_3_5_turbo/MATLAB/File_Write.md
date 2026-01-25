In order to write a file in MATLAB, you can use the `fprintf` or `fputc` function. 

Here's an example of using the `fprintf` function to write to a file:

```matlab
% Open a file for writing
fid = fopen('test.txt','w');

% Write a string to the file
fprintf(fid,'%s\n','Hello, world!');

% Close the file
fclose(fid);
```

In this example, we're opening a file called `test.txt` for writing using the `fopen` function with the `'w'` option. Then, we're using the `fprintf` function to write the string "Hello, world!" to the file, followed by a newline character (`'\n'`). Finally, we close the file using the `fclose` function.

Here's an example of using the `fputc` function to write to a file:

```matlab
% Open a file for writing
fid = fopen('test.txt','w');

% Write a character to the file
fputc('A',fid);

% Close the file
fclose(fid);
```

In this example, we're opening a file called `test.txt` for writing using the `fopen` function with the `'w'` option. Then, we're using the `fputc` function to write the character 'A' to the file. Finally, we close the file using the `fclose` function. 

Note that we're passing in the `fid` variable returned from the `fopen` function as the second argument to `fprintf` and `fputc`. This tells MATLAB which file to write to.