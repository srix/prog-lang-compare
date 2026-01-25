In C++, a hash table implementation is known as an unordered_map container, which allows efficient access to elements using keys. Here is an example of accessing a value using a key:

```
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> map{{"apple", 3}, {"orange", 2}, {"banana", 5}};

    int value = map["apple"]; // access the value associated with the "apple" key
    std::cout << "The value of the 'apple' key is: " << value << std::endl;
    return 0;
}
```

In the above example, we create an unordered map with string keys and integer values and initialize it with three key-value pairs. We then access the value associated with the "apple" key using the square bracket operator `[]`. The value is assigned to the `value` variable and printed to the console. 

We can also use the `find` method of the `unordered_map` class to get a const_iterator to the element if it exists in the map. Here is an example:

```
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> map{{"apple", 3}, {"orange", 2}, {"banana", 5}};

    auto it = map.find("orange"); // find the element with the key "orange"
    if (it != map.end()) { // check if the element was found
        int value = it->second; // access the value using the iterator
        std::cout << "The value of the 'orange' key is: " << value << std::endl;
    }
    return 0;
}
```

In the above example, we use the `find` method of the `unordered_map` class to get an iterator pointing to the element with the "orange" key. We check if the iterator is not equal to the `end` iterator of the map to make sure the element was found. If the element was found, we access the value using the `second` member of the iterator.