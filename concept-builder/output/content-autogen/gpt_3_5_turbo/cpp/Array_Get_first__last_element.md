To get the first and last element of an array in C++, you can use the indices 0 and size-1 respectively. Here is an example:

```c++
#include <iostream>
using namespace std;

int main() {
  int arr[] = {5, 6, 9, 2, 4, 10};
  int size = sizeof(arr)/sizeof(arr[0]);
 
  // Get the first element
  int first = arr[0];
  cout << "The first element is: " << first << endl;
 
  // Get the last element
  int last = arr[size-1];
  cout << "The last element is: " << last << endl;
  return 0;
}
```

Output:
```
The first element is: 5
The last element is: 10
```

In this example, we declare and initialize an integer array `arr` with six elements. We then get the size of the array by dividing the total size of `arr` by the size of one element `arr[0]`. We obtain the first element of the array `arr[0]` and the last element of the array `arr[size-1]` and print them to the console using `std::cout`.