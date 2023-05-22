In Lua, you can find the size of an array by using the `#` operator.

Here's an example:

```
my_array = {1, 2, 3, 4, 5}
print(#my_array)
```

This will output `5`, which is the size of the array.

Another example:

```
my_array = {"apple", "banana", "orange"}
print(#my_array)
```

This will output `3`, which is the size of the array. 

Note that this method works only with sequential arrays whose indices start from 1 and go up to a specific value. If you have an associative array, the `#` operator will not work accurately.