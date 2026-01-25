In C++, we can iterate over an array with index using a for loop. The for loop would have a counter variable to keep track of the index of the array. Here is an example:

```c++
#include <iostream>
using namespace std;

int main() {
  int my_array[] = {1, 2, 3, 4, 5};

  for(int i=0; i<5; i++){
    cout << "Index: " << i << " Value: " << my_array[i] << endl;
  }

  return 0;
}
```

In the above example, we have an integer array named `my_array` with 5 elements. The for loop iterates from 0 to 4 (since arrays in C++ start from 0 index) and prints the index and value of the array at each index using the counter variable `i`. 

The output of the above program would be:

```
Index: 0 Value: 1
Index: 1 Value: 2
Index: 2 Value: 3
Index: 3 Value: 4
Index: 4 Value: 5
```

So, here we have iterated over the array using a counter variable to keep track of the index.