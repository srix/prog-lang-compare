In MATLAB, a hash is referred to as a map or a containers.Map. To get the value of a key in a hash in MATLAB, you can use the syntax:

```matlab
value = mapObj(key);
```

where `mapObj` is the name of the hash object, `key` is the key for which you want to retrieve the value, and `value` is the value associated with that key.

Here's an example that demonstrates how to get a value from a hash in MATLAB:

```matlab
% create a hash object
mapObj = containers.Map({'apple', 'banana', 'orange'}, [3, 2, 1]);

% get the value of a key
appleCount = mapObj('apple');
fprintf('The count of apples is %d\n', appleCount);

% try to get the value of a non-existent key
try
    grapeCount = mapObj('grape');
    fprintf('The count of grapes is %d\n', grapeCount);
catch ME
    fprintf('Error occurred: %s\n', ME.message);
end
```

In the example above, we create a hash object with three keys - 'apple', 'banana', and 'orange' - and their respective values. We then use the `mapObj` object to get the value of the 'apple' key using the syntax `mapObj('apple')`, which returns the value 3. We then try to retrieve the value of a non-existent key 'grape' which will throw an error.