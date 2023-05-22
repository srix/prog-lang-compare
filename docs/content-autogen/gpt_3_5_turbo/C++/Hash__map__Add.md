In C++, we can use the unordered_map STL (standard template library) container to store elements in a hash table. To add an element to a hash table using an unordered_map container, follow the steps below:

Step 1: Create an empty unordered_map container.

```
unordered_map<string, int> umap;
```

This statement creates an empty hash table named `umap` that maps string keys to integer values.

Step 2: Insert key-value pairs into the unordered_map container using the `insert()` function.

```
umap.insert(make_pair("apple", 10));
```

This statement inserts a new key-value pair "apple"->10 into the hash table.

Alternatively, we can also use the square bracket notation to add a new element. If the key exists in the hash table, its value will be updated; otherwise, a new key-value pair will be added to the hash table.

```
umap["banana"] = 5;
```

This statement adds a new key-value pair "banana"->5 into the hash table.

Below is the complete example code:

```
#include <iostream>
#include <unordered_map>

using namespace std;

int main()
{
    // Create an empty hash table
    unordered_map<string, int> umap;

    // Insert keys and values into the hash table
    umap.insert(make_pair("apple", 10));
    umap["banana"] = 5;

    // Print the size and contents of the hash table
    cout << "Size of umap: " << umap.size() << endl;
    for (auto itr = umap.begin(); itr != umap.end(); itr++) {
        cout << itr->first << " : " << itr->second << endl;
    }

    return 0;
}
```

Output:

```
Size of umap: 2
apple : 10
banana : 5
```