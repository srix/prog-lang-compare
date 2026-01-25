In C++, we can use the `find()` function to check whether a key exists in a hash map or not. If the key exists, it returns an iterator to the key-value pair, otherwise it returns an iterator to the end of the hash map. Here is an example:

```c++
#include <iostream>
#include <unordered_map>

using namespace std;

int main() {
    unordered_map<string, int> myMap;
    myMap["one"] = 1;
    myMap["two"] = 2;
    myMap["three"] = 3;
    
    // check if "two" key exists
    if (myMap.find("two") != myMap.end()) {
        cout << "Key 'two' exists with value " << myMap["two"] << endl;
    } else {
        cout << "Key 'two' does not exist" << endl;
    }
    
    // check if "four" key exists
    if (myMap.find("four") != myMap.end()) {
        cout << "Key 'four' exists with value " << myMap["four"] << endl;
    } else {
        cout << "Key 'four' does not exist" << endl;
    }
    
    return 0;
}
```

Output:

```
Key 'two' exists with value 2
Key 'four' does not exist
```

In the above example, we create an unordered map `myMap` with string keys and integer values. We fill it with some key-value pairs. Then we check if `"two"` and `"four"` keys exist in the map using `find()` function and output the appropriate result.