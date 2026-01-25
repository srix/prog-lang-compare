A hash table is a data structure that maps keys to values, using a hash function to convert a key into an index of an array of buckets. Here is an example of how to create a basic hash table in C++:

```c++
#include <iostream>
#include <unordered_map>

using namespace std;

int main() {
    unordered_map<string, int> marks = {
        {"Alice", 92},
        {"Bob", 85},
        {"Charlie", 77},
        {"David", 80},
    };

    marks.insert({"Emma", 95});

    for (auto& pair : marks) {
        cout << pair.first << " => " << pair.second << endl;
    }

    return 0;
}
```

In this example, we are using the `unordered_map` class, which is part of the C++ Standard Library, to create a hash table. The keys are `string` values, and the values are `int` values (which represent the marks of students in this case).

We create the hash table using an initializer list. You can see that we insert a new key-value pair into the hash table using the `insert` function.

Finally, we iterate through the hash table using a range-based loop, and print out each key-value pair using `cout`.