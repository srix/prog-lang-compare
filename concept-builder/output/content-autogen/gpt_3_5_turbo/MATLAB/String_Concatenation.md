In MATLAB, you can concatenate strings using the [ ] operator or the strcat function.

Here are some examples:

Using [ ] operator:
```matlab
string1 = "Hello";
string2 = "world";
concatenated_string = [string1, " ", string2]
```

The output will be: 
```
concatenated_string = "Hello world"
```

Using strcat function:
```matlab
string1 = "Good";
string2 = "morning";
string3 = "!";
concatenated_string = strcat(string1, " ", string2, string3)
```

The output will be: 
```
concatenated_string = "Good morning!"
```

Note that when using the [ ] operator, you can include any character or expression in between the strings, while the strcat function requires all input arguments to be strings.