In C++, a hash table is implemented using the `unordered_map` container. To iterate over a hash table using the range-based `for` loop, you can loop through the pairs of keys and values stored in the hash table.

Here is an example of how you can iterate over a hash table in C++ using the `unordered_map` container:

```c++
#include <iostream>
#include <unordered_map>
using namespace std;

int main() {
    unordered_map<string, int> myHashMap;
    myHashMap["apple"] = 10;
    myHashMap["banana" ] = 5;
    myHashMap["orange"] = 20;

    // iterate through the hash table using the range-based for loop
    for (auto const& pair: myHashMap) {
        cout << "Key: " << pair.first << ", Value: " << pair.second << endl;
    }
    return 0;
}
```

Output:
```
Key: apple, Value: 10
Key: banana, Value: 5
Key: orange, Value: 20
```

In the above example, `auto const& pair` is used as a reference to the `std::pair<const string, int>` type representing each element of the hash map. `pair.first` and `pair.second` represent the key and value pairs, respectively.