In C++, you can get the size of an array using the `sizeof` operator. The syntax for getting the size of an array is as follows:

```
sizeof(array)/sizeof(array[0])
```

This works because the `sizeof` operator returns the number of bytes occupied by the array, and dividing it by the size of its elements gives the number of elements in the array.

Here is an example:

```c++
#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr)/sizeof(arr[0]);
    
    cout << "Size of array is: " << size << endl;
    
    return 0;
}
```

Output:

```
Size of array is: 5
```

In the above example, we have an array `arr` with 5 integers. We use the `sizeof` operator to get the total size of the array (in bytes) and divide it by the size of each element (which is also the size of an integer). This gives us the number of elements in the array, which is 5.