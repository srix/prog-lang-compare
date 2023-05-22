In C++, there are multiple ways to get the size of a hash. One common way is to use the `size()` function of the unordered_map container, which returns the number of key-value pairs in the hash table. Here is an example:

```c++
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> myHash = {{"apple", 3}, {"banana", 2}, {"cherry", 5}};
    
    std::cout << "Size of myHash is " << myHash.size() << std::endl;
    
    return 0;
}
```

Output:
```
Size of myHash is 3
```

Alternatively, we can use the `bucket_count()` function to get the number of buckets in the hash table. This value is not necessarily equal to the number of key-value pairs. Here is an example:

```c++
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> myHash = {{"apple", 3}, {"banana", 2}, {"cherry", 5}};
    
    std::cout << "Number of buckets in myHash is " << myHash.bucket_count() << std::endl;
    
    return 0;
}
```

Output:
```
Number of buckets in myHash is 8
```

Note that the number of buckets is implementation specific and may differ between different compilers or machines.