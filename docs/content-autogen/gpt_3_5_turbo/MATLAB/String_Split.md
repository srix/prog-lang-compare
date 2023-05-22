In MATLAB, you can split a string using the `strsplit` function. Here's an example:

```
str = 'Hello, world!';
delimiter = ' ';
result = strsplit(str, delimiter)
```

In this example, we create a string `str` with the value `'Hello, world!'`. We also create a delimiter `delimiter` with the value `' '`, which is a space. 

Then, we pass `str` and `delimiter` as arguments to the `strsplit` function, which splits the string `str` into an array of strings based on the delimiter `delimiter`. 

The resulting array `result` will contain this:

```
result = 

  1×2 cell array

    'Hello,'    'world!'
```

As you can see, the original string has been split into two strings based on the space delimiter.