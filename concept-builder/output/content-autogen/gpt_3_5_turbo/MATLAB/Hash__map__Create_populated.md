In MATLAB, you can create a hash table using the containers.Map function. Hash tables allow you to store and access values using keys, making it a useful data structure. Here's an example:

```matlab
% Create a new hash table with string keys and integer values
hashTable = containers.Map('KeyType', 'char', 'ValueType', 'int32');

% Add elements to the hash table
hashTable('apple') = 5;
hashTable('banana') = 10;
hashTable('orange') = 15;

% Access elements in the hash table by their key
disp(hashTable('banana')); % 10

% Modify elements in the hash table
hashTable('apple') = 7;

% Check if a key exists in the hash table
disp(ismember('banana', keys(hashTable))); % 1 (true)

% Remove an element from the hash table
remove(hashTable, 'orange');
```

In this example, we create a new hash table with string keys and integer values using the containers.Map function. We then add elements to the hash table using the key-value format. We access the 'banana' value by its key using the disp() function. We modify the 'apple' value, check if 'banana' is in the keys list using the ismember() function, and remove the 'orange' key using the remove() function.