In MATLAB, a hash is called a "Map". 

To iterate over a Map in MATLAB, you can use the "keys" and "values" functions along with a loop to retrieve the keys and values of each element in the Map. Here's an example:

```matlab
% Create a Map
myMap = containers.Map;
myMap('key1') = 'value1';
myMap('key2') = 'value2';
myMap('key3') = 'value3';

% Iterate over the Map
keys = myMap.keys;
values = myMap.values;

for i = 1:length(myMap)
  disp(['Key: ' keys{i} ', Value: ' values{i}])
end
```

This code will output:

```
Key: key1, Value: value1
Key: key2, Value: value2
Key: key3, Value: value3
```

In this example, we first create a Map called "myMap" with three key-value pairs. Then, we use the "keys" and "values" functions to retrieve the keys and values of each element in "myMap". Finally, we use a "for" loop to iterate over the Map and print out each key-value pair.