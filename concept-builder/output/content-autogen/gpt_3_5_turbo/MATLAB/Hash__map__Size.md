In MATLAB, you can get the size of the hash using the `size` function. 

Here's an example of how to get the size of a hash created using the `containers.Map` function:

```matlab
% Create a hash with some key-value pairs
myMap = containers.Map;
myMap('key1') = 10;
myMap('key2') = 20;
myMap('key3') = 30;

% Get the size of the hash
sizeMyMap = size(myMap);
disp(sizeMyMap);
```

Output:

```
1     1
```

In the above example, the `size` function returns a 1x1 matrix, which means that the hash has only one element. 

Alternatively, you can also use the `length` function to get the number of elements in a hash:

```
% Get the length of the hash
lengthMyMap = length(myMap);
disp(lengthMyMap);
```

Output:

```
3
```

In this case, the `length` function returns the number of key-value pairs in the hash, which is 3.